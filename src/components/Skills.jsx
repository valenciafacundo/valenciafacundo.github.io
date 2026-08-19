import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { CORE_STACK } from "../data/content.js";

export default function Skills() {
  const { t } = useLang();
  const s = t.skills;

  return (
    <section id="skills" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker={s.kicker} heading={s.heading} />

        {/* Core stack logos */}
        <Reveal>
          <div className="mt-10 grid grid-cols-3 sm:grid-cols-5 gap-3">
            {CORE_STACK.map((c) => (
              <div
                key={c.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface/50 py-5 hover:border-accent/50 hover:-translate-y-0.5 transition"
              >
                <img src={c.icon} alt="" className="h-8 w-8" loading="lazy" />
                <span className="text-xs text-muted text-center px-1">{c.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Grouped skills */}
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {s.groups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-surface/40 p-5">
                <h3 className="font-display font-semibold text-text">{g.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-lg border border-border bg-surface2/60 px-2.5 py-1 text-xs text-muted"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
