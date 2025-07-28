import { defineConfig } from "vite";

export default defineConfig({
    root: "src/",
    build: { outDir: "../dist/", emptyOutDir: true },
    base: "/fylo-dark-theme-landing-page/",
});
