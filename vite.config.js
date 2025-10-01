import { defineConfig } from "vite";
import postcssPresetEnv from "postcss-preset-env";
import postcssSortMediaQueries from "postcss-sort-media-queries";

export default defineConfig({
    root: "src/",
    build: { outDir: "../dist/", emptyOutDir: true },
    base: "/fylo-dark-theme-landing-page/",
    css: {
        postcss: {
            plugins: [postcssPresetEnv({ autoprefixer: true }), postcssSortMediaQueries()],
        },
    },
});
