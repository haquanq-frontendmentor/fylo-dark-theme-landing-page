/** @type {import('stylelint').Config} */
export default {
    extends: "stylelint-config-standard",
    rules: {
        "custom-property-empty-line-before": null,
        "declaration-block-no-redundant-longhand-properties": null,

        "font-family-name-quotes": "always-unless-keyword",
        "color-function-notation": "legacy",
        "hue-degree-notation": "number",
        "import-notation": "string",
        "at-rule-empty-line-before": ["always", { ignore: ["blockless-after-blockless"] }],
        "media-feature-range-notation": "prefix",
    },
};
