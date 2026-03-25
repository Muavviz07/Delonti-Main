import { NextRequest, NextResponse } from "next/server";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { sendContactEmail, ContactInfo } from "@/lib/email";

const GROQ_BASE_URL = process.env.GROQ_BASE_URL || "https://api.groq.com/openai/v1";
const DEFAULT_API_KEY = process.env.GROQ_API_KEY || "";
const DEFAULT_MODEL = process.env.OPENAI_MODEL || "llama-3.1-8b-instant";

const COMPANY_INFO = `Delonti Technology Solutions is a premier technology solutions provider.

ABOUT DELONTI:
- Delonti pioneers intelligent infrastructure, empowering public and private sectors globally with secure, scalable, and fully integrated technology solutions.
- With a decade of experience serving both public and private sectors, Delonti specializes in high-stakes environments where security and reliability are non-negotiable.
- Through strategic partnerships with industry leaders like Verizon, Delonti delivers government-grade excellence and scalable technology across the globe.

SERVICES:
1. RFID & IoT Solutions: Asset tracking, inventory management, supply chain visibility
2. Cybersecurity: Zero Trust security frameworks, identity-based access controls, continuous monitoring
3. Data & Analytics: Business intelligence, predictive analytics, real-time dashboards
4. Cloud & IT: Cloud migration, managed IT services, infrastructure modernization
5. Technical Staffing: Pre-vetted software developers, DevOps engineers, IT administrators

SECTORS SERVED:
- Federal Government: Department of Defense, Intelligence Community, civilian federal agencies
- State & Local Government: Smart cities, transportation, public safety, education
- Enterprise: Large organizations requiring integrated technology platforms
- SMB: Small and mid-sized businesses needing cost-effective technology solutions

KEY PAGES ON WEBSITE:
- /federal - Federal government solutions
- /state - State and local government solutions  
- /private - Private sector solutions (Enterprise & SMB)
- /resources - Case studies, whitepapers, blogs
- /contact - Contact information

IMPORTANT: You must ONLY answer questions related to Delonti company, its services, sectors, or related technology topics. If asked about unrelated topics, politely redirect to Delonti's offerings.`;

const contactLeadTool = tool(
  async (args: ContactInfo) => {
    if (!args.email) {
      return "No email provided. Cannot send contact info. Please ask user for their email address.";
    }
    try {
      return await sendContactEmail(args);
    } catch (error) {
      return "Failed to send email. Please try again or contact Delonti directly at their website.";
    }
  },
  {
    name: "contact_lead",
    description: "Submit contact form to Delonti team. User MUST provide their email address. Only call this tool after user explicitly shares their email.",
    schema: z.object({
      name: z.string().optional().describe("User's full name"),
      email: z.string().optional().describe("User's email address"),
      phone: z.string().optional().describe("User's phone number"),
      company: z.string().optional().describe("User's company or organization"),
      message: z.string().optional().describe("Any specific message or question from the user"),
      interest: z.string().optional().describe("Which service or area they're interested in"),
    }),
  }
);

const SYSTEM_PROMPT = `You are a helpful AI assistant for Delonti Technology Solutions' website. 

${COMPANY_INFO}

Guidelines:
- Only answer questions about Delonti company, its services, sectors, or technology topics
- If asked about unrelated topics, politely redirect to Delonti's offerings
- Remember details from previous messages in this conversation
- Be clear and concise in your responses
- When appropriate, suggest relevant pages from the website
- Format your responses using Markdown for better readability

CRITICAL RULES - contact_lead tool:
1. NEVER call contact_lead tool unless user has explicitly provided their EMAIL address
2. If user says "I'm interested" or "yes I want that" - DO NOT call tool. Instead, ASK: "Great! Could you please share your email address so our team can contact you?"
3. Only call contact_lead tool after user has typed/pasted their actual email (like john@company.com)
4. If no email is provided, just respond conversationally - never force the tool
5. Examples of when to call tool: "my email is john@gmail.com" OR "contact me at john@company.com"
6. Examples of when NOT to call tool: "yes I'm interested", "that sounds good", "I want RFID service"`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, apiKey, baseURL, model, temperature } = body;

    const finalApiKey = apiKey || DEFAULT_API_KEY;
    const finalBaseURL = baseURL || GROQ_BASE_URL;
    const finalModel = model || DEFAULT_MODEL;

    if (!finalApiKey) {
      return NextResponse.json(
        { error: "API key not configured. Please set GROQ_API_KEY in environment variables." },
        { status: 400 }
      );
    }

    const llm = new ChatOpenAI({
      openAIApiKey: finalApiKey,
      modelName: finalModel,
      temperature: temperature ?? 0.7,
      maxTokens: undefined,
      streaming: false,
      configuration: {
        baseURL: finalBaseURL,
        apiKey: finalApiKey,
      },
    }).bindTools([contactLeadTool]);

    const chatHistory = messages
      .slice(-10)
      .map((msg: { role: string; content: string }) => {
        if (msg.role === "user") return ["user", msg.content];
        if (msg.role === "assistant") return ["assistant", msg.content];
        return ["system", msg.content];
      });

    const prompt = ChatPromptTemplate.fromMessages([
      ["system", SYSTEM_PROMPT],
      ...chatHistory,
    ]);

    const chain = prompt.pipe(llm);
    const response = await chain.invoke({});

    if (response.tool_calls && response.tool_calls.length > 0) {
      const toolCall = response.tool_calls[0];
      
      if (toolCall.name === "contact_lead") {
        const args = toolCall.args as { email?: string; name?: string; phone?: string; company?: string; message?: string; interest?: string };
        
        if (!args.email) {
          return NextResponse.json({
            message: "I'd be happy to help connect you with Delonti's team! Could you please share your email address so they can reach out to you?",
          });
        }
        
        try {
          const toolResult = await contactLeadTool.call(args);

          return NextResponse.json({
            message: toolResult + "\n\nThank you for your interest! Delonti's team will contact you shortly.",
            contactSubmitted: true,
          });
        } catch (toolError) {
          console.error("Tool execution error:", toolError);
          return NextResponse.json({
            message: response.content,
          });
        }
      }
    }

    return NextResponse.json({
      message: response.content,
    });
  } catch (error) {
    console.error("Chat error:", error);
    const errorMessage = error instanceof Error ? error.message : "Chat failed";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
