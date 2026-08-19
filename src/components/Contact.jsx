import { Mail, Phone, Download, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { PROFILE } from "../data/content.js";

export default function Contact() {
  const { t, lang } = useLang();
  const c = t.contact;

  const channels = [
    { icon: Mail, label: c.channels.email, value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: c.channels.phone, value: PROFILE.phone, href: PROFILE.phoneHref },
    { icon: LinkedinIcon, label: c.channels.linkedin, value: "valencia-facundo", href: PROFILE.linkedin },
    { icon: GithubIcon, label: c.channels.github, value: "valenciafacundo", href: PROFILE.github },
  ];

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="rounded-3xl border border-border bg-surface/50 p-7 sm:p-12 relative overflow-hidden">
          <div
            className="absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, var(--color-accent), transparent 60%)" }}
          />
          <div className="relative">
            <SectionHeading kicker={c.kicker} heading={c.heading} />
            <Reveal>
              <p className="mt-5 max-w-2xl text-muted leading-relaxed">{c.lead}</p>
            </Reveal>

            <Reveal>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-semibold text-[var(--color-accent-contrast)] hover:brightness-105 transition"
                >
                  <Mail size={18} />
                  {c.emailCta}
                </a>
                <a
                  href={PROFILE.cv[lang]}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-semibold text-text hover:border-accent/60 transition"
                >
                  <Download size={18} />
                  {c.resumeCta}
                </a>
              </div>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {channels.map((ch, i) => {
                const external = ch.href.startsWith("http");
                return (
                  <Reveal key={ch.label} delay={i * 0.06}>
                    <a
                      href={ch.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 hover:border-accent/50 transition-colors"
                    >
                      <span className="grid place-items-center h-10 w-10 rounded-xl bg-accent/12 text-accent shrink-0">
                        <ch.icon size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-faint">{ch.label}</span>
                        <span className="block text-sm text-text truncate">{ch.value}</span>
                      </span>
                      {external && (
                        <ArrowUpRight
                          size={15}
                          className="ml-auto text-faint group-hover:text-accent transition"
                        />
                      )}
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
