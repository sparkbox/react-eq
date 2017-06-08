module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
      "node": true,
      "browser": true
    },
    "rules": {
      "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }],
      "jsx-a11y/anchor-has-content": [ 2, {
            "components": [ "Anchor" ],
          }],
      "react/require-extension": 0,
      "arrow-body-style": [2, "as-needed"],
      "react/no-did-mount-set-state": 0,
      "import/no-mutable-exports": 0,
      "import/no-extraneous-dependencies": 0,
      "no-console": 0,
      "strict": 0,
      "new-cap": [2, {"capIsNewExceptions": ["Router"]}],
      "import/extensions": 0,
      "import/prefer-default-export": 0,
      "import/no-unresolved": 0 // This fixes a problem with Codeclimate https://github.com/codeclimate/codeclimate-eslint/issues/90
    },
    "globals": {
      "describe": true,
      "it": true,
      "xit": true,
      "beforeEach": true,
      "afterEach": true,
      "Modernizr": true
    }
}
