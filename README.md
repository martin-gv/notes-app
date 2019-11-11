# Notes App

## Project Setup

### Linting and Formatting

As a convenience during development, the ESLint and Prettier VS Code extensions are used. ESLint is set up to catch code errors, while Prettier handles formatting.

### ESLint

The `.eslintrc` file overrides `package.json`.

Installing ESLint manually may show an error as Create React App already includes it.

The Prettier config (`eslint-config-prettier`) is included last to disable any ESLint rules that it handles itself. Prettier sub-configs should be added to make exceptions for any plugins used by other configs. In this case, `eslint-config-react-app` uses the following three plugins:

- @typescript-eslint/eslint-plugin
- eslint-plugin-flowtype
- eslint-plugin-react (also used by `eslint-config-airbnb`)

The Pretter plugin `eslint-plugin-prettier` is *not* used. Doing so would include Prettier errors along with ESLint errors, which would be overly distracting during development.

Additional rules:

```
"linebreak-style": ["error", "unix"],
"react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }]
```

The `EXTEND_ESLINT` environment variable is *not* set to allow building during development. Pre-commit and, for production, pre-build manual checks should be done.

### Airbnb

The Airbnb ESLint config includes these useful PropTypes rules:

- `react/require-default-props`: all non-required props must have a default prop
- `react/default-props-match-prop-types`: all default props have an existent, and non-required, prop
- `react/no-unused-prop-types`: all defined props should be used

Optionally, `eslint-config/airbnb/hooks` will enforce `react-hooks/rules-of-hooks` and `react-hooks/exhaustive-deps` as errors, and not as warnings like in CRA.

### Prettier

Prettier should be installed with `--save-exact` because stylistic changes are introduced in patch releases.

Settings in `.prettierrc` override Prettier defaults with Airbnb style:

```
"singleQuote": true,
"trailingComma": "all",
"arrowParens": "always"
```

Single quotes are used everywhere, except in JSX where HTML style double quotes are used.

Trailing commas help make diffs cleaner. The "all" setting enables them in function arguments, along with ES5 support in objects and arrays, and requires transpiling with Babel.

The [Babel online editor](https://commonmark.org/help/) is a good way to check if the transpiled code will be compatible with the target browsers specified in the `browserslist` key in `package.json`.

Using parantheses consistently with arrow functions makes them easier to identify by "shape" `(x) => y`

### lint-staged

First runs Prettier with `--check`. Then runs ESLint. It runs in a pre-commit hook, or can be run manually with `npm run lint`.

### husky

Pre-commit hook runs lint-staged before committing.

### .gitattributes

This file can be used to enforce LF line endings in all files, not just Javascript ones. Example setup:

```
* text eol=lf
* .png binary
* .ico binary
```

`*` applies settings to all files

`text` marks files as text files causing eol conversion to be done without guessing content type, though this setting is *not* required (see below).

`eol` enables conversion without content checks, and `lf` forces git to normalize endings and prevent conversion to CRLF.

Non-text files can be set to `binary` to prevent conversion. If not, they will show up as "changed" in git.

### .env

Create React App will read a `.env` file in the project root.
