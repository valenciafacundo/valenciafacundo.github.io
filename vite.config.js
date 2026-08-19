import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Deployed at the root of https://valenciafacundo.github.io (user page) -> base "/".
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
});
