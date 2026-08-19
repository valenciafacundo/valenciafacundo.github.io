import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { COMPANIES } from "../data/content.js";

export default function Experience() {
  const { t, lang } = useLang();
  const e = t.experience;

  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-28 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker={e.kicker} heading={e.heading} />
        <Reveal>
          <p className="mt-5 max-w-3xl text-muted leading-relaxed">{e.intro}</p>
        </Reveal>

        {/* Companies strip — nominative logos to convey the scale of the work */}
        <Reveal>
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.16em] text-faint mb-3">
              {e.companiesLabel}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {COMPANIES.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-3 py-2"
                >
                  <span className="grid place-items-center h-9 w-9 rounded-lg bg-white shrink-0">
                    <img src={c.logo} alt={c.name} className="max-h-6 max-w-[26px] object-contain" />
                  </span>
                  <div className="pr-1">
                    <div className="text-sm font-semibold text-text leading-none">{c.name}</div>
                    <div className="text-[11px] text-faint mt-0.5">{c.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <ol className="mt-12 relative border-l border-border/80 ml-1.5 space-y-8">
          {e.jobs.map((job, i) => (
            <li key={job.company + i} className="relative pl-7 sm:pl-9">
              <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent" />
              <Reveal delay={i * 0.05}>
                <article className="rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-[var(--shadow-card)]">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    {job.logo && (
                      <span className="grid place-items-center h-9 w-9 rounded-lg bg-white border border-border shrink-0 mr-1">
                        <img src={job.logo} alt="" className="max-h-6 max-w-[26px] object-contain" />
                      </span>
                    )}
                    <h3 className="font-display text-lg font-bold text-text">{job.company}</h3>
                    {job.via && <span className="text-accent text-sm font-medium">· {job.via}</span>}
                    {job.current && (
                      <span className="ml-auto rounded-full bg-emerald-400/12 text-emerald-400 text-[11px] font-semibold px-2.5 py-0.5">
                        {lang === "es" ? "Actual" : "Current"}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-muted">{job.role}</p>
                  <p className="mt-1 text-xs text-faint">
                    {job.period}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {job.links && (
                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
                      <span className="text-faint">{job.linksLabel}</span>
                      {job.links.map((lnk) => (
                        <a
                          key={lnk.url}
                          href={lnk.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-0.5 text-accent hover:underline"
                        >
                          {lnk.label}
                          <ArrowUpRight size={13} />
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <div className="mt-10 rounded-2xl border border-dashed border-border p-5 sm:p-6">
            <h4 className="font-display font-semibold text-text">{e.earlierLabel}</h4>
            <ul className="mt-3 grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {e.earlier.map((x, i) => (
                <li key={i} className="text-sm text-muted flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-faint">{e.employerNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
