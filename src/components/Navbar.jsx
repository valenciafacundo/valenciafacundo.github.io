import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLang } from "../context/LanguageContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "backdrop-blur-md bg-bg/80 border-b border-border"
          : "bg-transparent border-b border-transparent")
      }
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-accent text-[var(--color-accent-contrast)] font-display font-bold">
            FV
          </span>
          <span className="hidden sm:block font-display font-semibold tracking-tight">
            Facundo Valencia
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="px-3 py-2 text-sm text-muted hover:text-text transition-colors rounded-lg"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="h-9 px-2.5 rounded-lg text-xs font-semibold border border-border text-muted hover:text-text hover:border-accent/60 transition-colors"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid place-items-center h-9 w-9 rounded-lg border border-border text-muted hover:text-text hover:border-accent/60 transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden grid place-items-center h-9 w-9 rounded-lg border border-border text-muted hover:text-text transition-colors"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-5 py-3 flex flex-col">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="py-2.5 text-muted hover:text-text transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
