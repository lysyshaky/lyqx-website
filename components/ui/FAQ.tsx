"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "What does LYQX specialize in?",
    a: "LYQX focuses on building high-quality digital solutions — from websites and mobile apps to full-scale platforms — tailored to solve real business challenges. We work across mobile, web, UX/UI, branding, backend, and AI.",
  },
  {
    q: "Can you handle full-cycle development?",
    a: "Yes. We cover the complete product lifecycle — from discovery and UX research to design, development, QA, launch, and post-launch support. You get one team for the entire journey.",
  },
  {
    q: "Do you offer post-launch support and maintenance?",
    a: "Absolutely. We provide ongoing maintenance, performance monitoring, feature iterations, and technical support after your product goes live. Your success after launch is part of our commitment.",
  },
  {
    q: "How do you ensure quality and deadlines?",
    a: "We use structured sprint planning, milestone-based delivery, and daily alignment to keep projects on track. Every product goes through rigorous QA before release — no exceptions.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((item, i) => (
        <div key={i} className="rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left gap-3"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-sm font-semibold leading-snug">{item.q}</span>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="text-2xl font-light text-white/40 shrink-0 leading-none"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm text-white/50 leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
