module.exports = {
    extends: ["@it-incubator/eslint-config"],
    overrides: [
        {
            files: ["**/*.stories.tsx"],
            rules: {
                "no-console": "off",
                "react-hooks/rules-of-hooks": "off"
            }
        },
        {
            files: ["src/assets/icons/components/*.tsx"],
            rules: {
                "no-duplicate-imports": "warn",
            }
        }
    ],
    // "rules": {
    //     "import/extensions": false,
    // },
};
