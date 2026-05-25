"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({ to, suffix = "", duration = 1.8, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const raw = (step / steps) * to;
      setCount(Number.isInteger(to) ? Math.round(raw) : Math.round(raw * 10) / 10);
      if (step >= steps) clearInterval(timer);
    }, (duration * 1000) / steps);
    return () => clearInterval(timer);
  }, [isInView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}
