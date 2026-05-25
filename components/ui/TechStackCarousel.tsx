"use client";

const techs = [
  { name: "Flutter",    slug: "flutter",     rotate:  4 },
  { name: "Figma",      slug: "figma",        rotate: -4 },
  { name: "React",      slug: "react",        rotate:  5 },
  { name: "Framer",     slug: "framer",       rotate: -2 },
  { name: "Node.js",    slug: "nodedotjs",    rotate:  4 },
  { name: "Next.js",    slug: "nextdotjs",    rotate: -4 },
  { name: "TypeScript", slug: "typescript",   rotate:  3 },
  { name: "Python",     slug: "python",       rotate: -3 },
  { name: "Docker",     slug: "docker",       rotate:  5 },
  { name: "Swift",      slug: "swift",        rotate: -5 },
  { name: "Kotlin",     slug: "kotlin",       rotate:  2 },
  { name: "Firebase",   slug: "firebase",     rotate: -2 },
  { name: "GraphQL",    slug: "graphql",      rotate:  4 },
  { name: "Tailwind",   slug: "tailwindcss",  rotate: -4 },
  { name: "Supabase",   slug: "supabase",     rotate:  3 },
  { name: "Go",         slug: "go",           rotate: -3 },
];

export default function TechStackCarousel() {
  const items = [...techs, ...techs];

  return (
    <div
      className="overflow-hidden py-8"
      style={{
        maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 10%, rgb(0,0,0) 90%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 10%, rgb(0,0,0) 90%, rgba(0,0,0,0) 100%)",
      }}
    >
      <div
        className="flex gap-6 animate-marquee-slow"
        style={{ width: "max-content" }}
      >
        {items.map((tech, i) => (
          <div
            key={i}
            aria-hidden={i >= techs.length}
            className="shrink-0 w-[190px] h-[190px] rounded-3xl flex flex-col items-center justify-center gap-4"
            style={{
              background: "var(--card-2)",
              border: "1px solid rgba(255,255,255,0.07)",
              transform: `rotate(${tech.rotate}deg)`,
              boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://cdn.simpleicons.org/${tech.slug}/ffffff`}
              alt={tech.name}
              width={90}
              height={90}
              className="w-[90px] h-[90px] object-contain opacity-90"
              loading="lazy"
            />
            <span
              className="text-[10px] font-semibold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.58)" }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
