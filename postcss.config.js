/** @type {import('postcss-load-config').Config} */
export default {
    plugins: {
        "postcss-import": {},
        "postcss-nested": {},
        "postcss-preset-env": {},
        "postcss-custom-media": {},
        "postcss-sort-media-queries": {},
        autoprefixer: {},
        cssnano: { preset: "default" },
    },
};
