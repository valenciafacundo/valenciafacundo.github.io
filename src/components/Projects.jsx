import { ArrowUpRight, Download } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import { useLang } from "../context/LanguageContext.jsx";

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;

  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-28 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker={p.kicker} heading={p.heading} />
        <Reveal>
          <p className="mt-5 max-w-2xl text-muted">{p.intro}</p>
        </Reveal>

        {/* In-production showcase — public marketing visuals of the products */}
        <Reveal>
          <div className="mt-10 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              {p.inProduction}
            </span>
          </div>
        </Reveal>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {p.enterprise.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.07}>
              <EnterpriseCard e={e} downloads={p.downloads} storeLabel={p.storeLabel} />
            </Reveal>
          ))}
        </div>

        {/* Other projects */}
        <Reveal>
          <div className="mt-14 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-faint" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              {p.otherLabel}
            </span>
          </div>
        </Reveal>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {p.items.map((proj, i) => (
            <Reveal key={proj.name} delay={(i % 3) * 0.06}>
              <ProjectCard proj={proj} liveLabel={p.liveLabel} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnterpriseCard({ e, downloads, storeLabel }) {
  return (
    <a
      href={e.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={e.image}
          alt={e.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

      <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
        <Download size={12} />
        {e.metric} {downloads}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="font-display text-lg font-bold text-white">{e.name}</h3>
        <p className="text-sm text-white/80">{e.role}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {e.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/12 px-2 py-0.5 text-[11px] text-white/90 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-white/90">
          {storeLabel}
          <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
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
