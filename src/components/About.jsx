import { BadgeCheck, Code2, Layers, Rocket, Sparkles } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import { useLang } from "../context/LanguageContext.jsx";

const ICONS = [Code2, Layers, Rocket, Sparkles];

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker={a.kicker} heading={a.heading} />

        <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <Reveal>
            <p className="text-lg font-medium text-text">{a.lead}</p>
            {a.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 text-muted leading-relaxed">
                {p}
              </p>
            ))}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              <BadgeCheck size={16} />
              {t.cert}
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {a.highlights.map((h, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <Reveal key={h.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-border bg-surface/50 p-5 hover:border-accent/50 transition-colors">
                    <div className="grid place-items-center h-10 w-10 rounded-xl bg-accent/12 text-accent">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-4 font-display font-semibold text-text">{h.title}</h3>
                    <p className="mt-1.5 text-sm text-muted leading-relaxed">{h.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
