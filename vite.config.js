import { defineConfig } from "vite";

export default defineConfig({
    root: "src/",
    build: { outDir: "../dist/", emptyOutDir: true },
    base: "/fm-fylo-dark-theme-landing-page/",
});
