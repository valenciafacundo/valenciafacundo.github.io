import Reveal from "./Reveal.jsx";

export default function SectionHeading({ kicker, heading, align = "left" }) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div
        className={
          "flex items-center gap-3 mb-4 " +
          (align === "center" ? "justify-center" : "")
        }
      >
        <span className="h-px w-8 bg-accent/70" />
        <span className="text-accent font-medium tracking-[0.18em] uppercase text-xs">
          {kicker}
        </span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text">
        {heading}
      </h2>
    </Reveal>
  );
}
