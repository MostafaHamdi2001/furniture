# Fix: React/Webpack errors in furni project

## 1. '__WEBPACK_DEFAULT_EXPORT__' before initialization
Caused by a stale/corrupted Webpack HMR cache during hot-reload, not source code (verified no circular imports exist).
- [x] Stop the running dev server (clears active HMR state)
- [x] Clear the Webpack build cache (`node_modules/.cache`)
- [x] Restart `npm start` and verify the app loads without errors

## 2. `style` prop expects an object, not a string
React warning in `src/Cart/Content.jsx` — the `style` prop was passed as a string instead of an object.
- [x] Change `style="max-width: 120px;"` to `style={{ maxWidth: "120px" }}` (2 occurrences)
- [x] Verify no other string `style` props remain in `src/`
