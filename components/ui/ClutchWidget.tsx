"use client";

import { useEffect } from "react";

export default function ClutchWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="clutch-widget"
      data-url="https://widget.clutch.co"
      data-widget-type="2"
      data-height="45"
      data-nofollow="false"
      data-expandifr="true"
      data-scale="100"
      data-clutchcompany-id="2104847"
      style={{ minWidth: 220 }}
    />
  );
}
