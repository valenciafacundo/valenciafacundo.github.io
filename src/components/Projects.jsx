import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import { useLang } from "../context/LanguageContext.jsx";

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;
  const [filter, setFilter] = useState("all");

  const filters = [
    { id: "all", label: p.filters.all },
    { id: "web", label: p.filters.web },
    { id: "mobile", label: p.filters.mobile },
  ];

  const visible = useMemo(
    () => (filter === "all" ? p.items : p.items.filter((it) => it.type === filter)),
    [filter, p.items]
  );

  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-28 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker={p.kicker} heading={p.heading} />
          <Reveal>
            <div className="flex items-center gap-1 rounded-xl border border-border bg-surface p-1">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={
                    "px-3.5 py-1.5 rounded-lg text-sm font-medium transition " +
                    (filter === f.id
                      ? "bg-accent text-[var(--color-accent-contrast)]"
                      : "text-muted hover:text-text")
                  }
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-5 max-w-2xl text-sm text-muted">{p.intro}</p>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((proj, i) => (
            <Reveal key={proj.name} delay={(i % 3) * 0.06}>
              <ProjectCard proj={proj} liveLabel={p.liveLabel} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ proj, liveLabel }) {
  const Wrapper = proj.url ? "a" : "div";
  const wrapperProps = proj.url
    ? { href: proj.url, target: "_blank", rel: "noopener noreferrer" }
    : {};
  const contain = proj.fit === "contain";

  return (
    <Wrapper
      {...wrapperProps}
      className="group block h-full overflow-hidden rounded-2xl border border-border bg-surface hover:border-accent/50 transition-colors shadow-[var(--shadow-card)]"
    >
      <div className={"relative overflow-hidden aspect-[4/3] " + (contain ? "bg-surface2" : "")}>
        <img
          src={proj.image}
          alt={proj.name}
          loading="lazy"
          className={
            "h-full w-full transition-transform duration-500 group-hover:scale-[1.04] " +
            (contain ? "object-contain p-3" : "object-cover object-top")
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
        {proj.url && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-[var(--color-accent-contrast)] opacity-0 group-hover:opacity-100 transition">
            {liveLabel}
            <ArrowUpRight size={12} />
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-text flex items-center gap-1">
          {proj.name}
          {proj.url && (
            <ArrowUpRight
              size={16}
              className="text-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
            />
          )}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed">{proj.desc}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {proj.stack.map((s) => (
            <span key={s} className="rounded-md border border-border px-2 py-0.5 text-[11px] text-faint">
              {s}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
