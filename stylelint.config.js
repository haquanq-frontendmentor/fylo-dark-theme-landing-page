/** @type {import('stylelint').Config} */
export default {
    extends: "stylelint-config-standard",
    rules: {
        "font-family-name-quotes": "always-unless-keyword",
        "custom-property-empty-line-before": null,
        "color-function-notation": "legacy",
        "hue-degree-notation": "number",
        "import-notation": "string",
    },
};
