import { NextRequest, NextResponse } from "next/server";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { sendContactEmail, ContactInfo } from "@/lib/email";

const GROQ_BASE_URL = process.env.GROQ_BASE_URL || "https://api.groq.com/openai/v1";
const DEFAULT_API_KEY = process.env.GROQ_API_KEY || "";
const DEFAULT_MODEL = process.env.OPENAI_MODEL || "llama-3.1-8b-instant";

const COMPANY_INFO = `Delonti Technology Solutions is a premier technology solutions provider specializing in RFID, IoT, and Cybersecurity.

ABOUT DELONTI:
- Delonti pioneers intelligent infrastructure, empowering public and private sectors globally with secure, scalable, and fully integrated technology solutions.
- With a decade of experience serving both public and private sectors, Delonti specializes in high-stakes environments where security and reliability are non-negotiable.
- Through strategic partnerships with industry leaders like Verizon, Delonti delivers government-grade excellence and scalable technology across the globe.

LATEST SOLUTIONS (ACTIVE PAGES & DETAILS):
1. Asset Tracking (/solutions/asset-tracking):
   - Real-time tracking and monitoring of equipment, tools, and high-value physical assets using RFID tags, IoT sensors, cloud telemetry, and AI utilization insights.
   - Applications: Government departments, Healthcare equipment, Manufacturing tools, and Warehouse asset/equipment tracking.
   - Assets Tracked: IT assets (computers, laptops), manufacturing equipment, medical devices, vehicles & fleets, inventory containers, tools & instruments, furniture & fixtures, and critical infrastructure.
   - Key Benefits: Reduce asset loss, improve utilization rates, fast audit cycles, increase warehouse and office efficiency.
2. Inventory Intelligence (/solutions/inventory-intelligence):
   - Automated inventory stock tracking, real-time quantity monitoring, and supply chain visibility.
   - Leverages RFID sensors and automated count cycles to prevent shrinkage, automate restocking alerts, and eliminate manual audits.
3. Workforce Safety (/solutions/workforce-safety):
   - Advanced personnel monitoring and instant alert systems for hazardous environments.
   - Features: Real-time zone tracking, fall detection, wearable sensor integration, environmental safety alerts, and automated evacuation telemetry.
4. Facility Intelligence (/solutions/facility-intelligence):
   - Smart building automation and facility telemetry using connected IoT sensors.
   - Integrates building management systems (BMS), optimizes HVAC/lighting energy usage, tracks real-time room occupancy, and manages physical access controls.

LATEST INDUSTRIES SERVED (ACTIVE PAGES & DETAILS):
1. Government (/industries/government):
   - Connects civilian, public safety, and administrative divisions with secure digital infrastructure.
   - Deploys Smart Kiosk platforms providing real-time local community resources (shelter availability, healthcare referrals, public service directories).
   - Strategic partnership with Verizon to deliver secure regional data routing and public service access grids.
2. Healthcare (/industries/healthcare):
   - Clinical equipment localization, medical device inventory management, and patient registration integrations.
   - Deploys Smart Patient Service Access Kiosks for check-in registration, wayfinding maps, and patient flow analytics.
3. Education (/industries/education):
   - Smart school grids, building access controls, and campus security systems.
   - Asset tracking for school lab equipment, books, IT hardware, and student safety monitoring.
4. Manufacturing (/industries/manufacturing):
   - Production line telemetry, tooling/mold tracking, predictive machine maintenance alerts, and raw material routing.
5. Supply Chain (/industries/supply-chain):
   - Retail store visibility, multi-warehouse automation, container and logistics route optimization, and AI-driven predictive replenishment.
6. Public Safety (/industries/public-safety):
   - Cleared communication grids, emergency responder real-time zone tracking, and automated dispatch management.

CORPORATE & RESOURCE PAGES:
- Company Overview (/about): Delonti's mission, executive profile, and corporate history of bridging complex hardware with intuitive software.
- Partner Ecosystem (/about/partners): Our ecosystem of network operators, hardware manufacturers, and cloud platforms (led by Verizon).
- Careers (/about/careers): Global job opportunities for pre-vetted engineers, software developers, DevOps personnel, and administrators.
- Resources Hub (/resources): The central knowledge base linking to whitepapers, case studies, blogs, and videos.
- Case Studies (/resources/case-studies): Detailed analysis of real-world deployments (e.g. RFID tracking, smart kiosk platforms).
- Engineering Blog (/resources/blogs): Architectural insights, release updates, and technical articles written by our engineering team.
- Public Sector Insights (/resources/insights): Specialized articles and research on government modernization, smart city grids, and compliance.
- Solution Videos (/resources/solution-videos): Video gallery demonstrating live product features and hardware demos.
- Business Cases (/resources/business-cases): Financial ROI models, procurement toolkits, and investment decision support guides.
- Whitepapers (/resources/whitepapers): In-depth research papers on security, compliance standards (OMB M-22-09, DISA IL5, ITAR), and RFID/IoT architectures.
- Contact Us (/contact): Inquiry forms for expert consultation, custom quotes, and product demos.

LEGAL & COMPLIANCE PAGES:
- /privacy (Privacy Policy)
- /terms (Terms of Service)
- /compliance (Security & Compliance)
- /cookie-policy (Cookie Policy)
- /cookie-preferences (Cookie Preferences)
- /accessibility (Accessibility Statement)
- /responsible-ai (Responsible AI Statement)
- /sitemap (Visual Page Map)

CRITICAL RULES FOR RESPONDING:
1. ONLY answer queries using the facts and paths explicitly defined in the context above.
2. Do NOT invent services, features, pages, case studies, or partners that are not mentioned in this document.
3. If asked about a topic or service not in this directory (e.g. non-existent pages like /federal, /state, or /private), politely explain that the page/service is not part of Delonti's current offerings, and guide the user to the active solutions, industries, or contact pages.
4. Ensure all URLs mentioned to the user match the exact path list above.`;

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
