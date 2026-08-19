import { motion } from "framer-motion";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { useLang } from "../context/LanguageContext.jsx";
import { PROFILE, CORE_STACK } from "../data/content.js";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-32 pb-16 sm:pt-40 sm:pb-24">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {t.hero.available}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]"
          >
            {PROFILE.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 font-display text-xl sm:text-2xl font-semibold text-accent"
          >
            {t.hero.role}
          </motion.p>

          <motion.p variants={item} className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
            {t.hero.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-4 flex items-center gap-2 text-sm text-faint">
            <MapPin size={15} className="text-accent" />
            {PROFILE.location}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-semibold text-[var(--color-accent-contrast)] hover:brightness-105 transition"
            >
              {t.hero.ctaProjects}
              <ArrowUpRight size={18} />
            </a>
            <a
              href={PROFILE.cv[lang]}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/50 px-5 py-3 font-semibold text-text hover:border-accent/60 transition"
            >
              <Download size={18} />
              {t.hero.ctaCV}
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {t.hero.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-surface/40 px-4 py-3">
                <div className="font-display font-bold text-text leading-tight">{s.value}</div>
                <div className="text-xs text-muted mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Core stack strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          {CORE_STACK.map((s) => (
            <div key={s.label} className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
              <img src={s.icon} alt="" className="h-6 w-6" loading="lazy" />
              <span className="text-sm text-muted">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
