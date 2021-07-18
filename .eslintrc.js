module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-alert": "off",
        "no-console": "off",
        "no-debugger": "off",
        "global-require": "off",
        "no-restricted-globals": "off",
        "react/forbid-prop-types": "off",
        "react/require-default-props": "off",
        "react/prefer-stateless-function": "off",
        "react/jsx-filename-extension": ["warn", {
            "extensions": [".js", ".jsx"]
        }],
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "max-len": ["error", 120, {
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true,
            "ignoreStrings": true
        }],
        "no-unused-expressions": ["error", { "allowShortCircuit": true }],
        "react/state-in-constructor": "off",
        "react/jsx-props-no-spreading": "off",
        "react/destructuring-assignment": "off",
        "camelcase": "off",
        "no-underscore-dangle": "off",
        "prefer-promise-reject-errors": "off",
        "linebreak-style": "off",
        "no-plusplus": "off",
        "no-use-before-define": "error",
        "no-useless-return": "off"
    }
};
