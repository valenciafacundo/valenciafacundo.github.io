import { createContext, useContext, useEffect, useState } from "react";
import { content } from "../data/content.js";

const LanguageContext = createContext(null);

function detectInitialLang() {
  const saved = localStorage.getItem("lang");
  if (saved === "en" || saved === "es") return saved;
  const nav = navigator.language || "en";
  return nav.toLowerCase().startsWith("es") ? "es" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const value = {
    lang,
    setLang,
    toggleLang: () => setLang((l) => (l === "en" ? "es" : "en")),
    t: content[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
