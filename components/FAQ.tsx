"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does RFID work in asset management?",
    answer:
      "RFID uses radio waves to automatically identify and track items attached with RFID tags. This allows for hands-free, automated tracking of assets, ensuring real-time visibility and reducing manual checks.",
  },
  {
    question: "Can GPS and RFID be used together?",
    answer:
      "Yes, our platform integrates both GPS and RFID technologies to provide a comprehensive solution for asset tracking, fleet management, and personnel monitoring. While GPS provides location data, RFID enables automated tracking and monitoring without the need for manual intervention.",
  },
  {
    question: "How can I ensure the security of GPS and RFID data?",
    answer:
      "We use industry-standard encryption protocols to secure GPS and RFID data. All tracking information is stored securely and is accessible only by authorized personnel.",
  },
];

export default function FAQ() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.35em] uppercase text-slate-500 mb-4">
            FAQ
          </p>

          <h2 className="text-3xl md:text-[34px] font-semibold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-slate-200 rounded-xl px-6 transition-all duration-300 hover:border-slate-300"
            >
              <AccordionTrigger className="py-6 text-left text-[16px] font-medium text-slate-800 hover:no-underline">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-[15px] leading-relaxed text-slate-500 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}