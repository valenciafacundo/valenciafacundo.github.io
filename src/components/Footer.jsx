import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import { PROFILE } from "../data/content.js";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <div className="font-display font-semibold text-text">{PROFILE.name}</div>
          <div className="text-sm text-muted">{t.footer.role}</div>
          <div className="mt-1 text-xs text-faint">
            © {year} · {t.footer.built}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid place-items-center h-10 w-10 rounded-xl border border-border text-muted hover:text-text hover:border-accent/60 transition"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid place-items-center h-10 w-10 rounded-xl border border-border text-muted hover:text-text hover:border-accent/60 transition"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="grid place-items-center h-10 w-10 rounded-xl border border-border text-muted hover:text-text hover:border-accent/60 transition"
          >
            <Mail size={18} />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="grid place-items-center h-10 w-10 rounded-xl border border-border text-muted hover:text-text hover:border-accent/60 transition"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
