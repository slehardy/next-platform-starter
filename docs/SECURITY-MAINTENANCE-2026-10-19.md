# Security maintenance October 19 2026

Dependency alerts and supported automatic security update PRs are enabled in GitHub. Weekly grouped Dependabot updates, pinned workflow actions and redacted full-history secret checks keep routine maintenance visible. Existing product behavior and hosting remain in place.

The updated lockfile audit reports 0 critical, 5 high and 0 moderate package entries. These are dependency-chain entries, not independent exploits or proof of production exposure.

Remaining findings depend on upstream braces and, in sam.ai, sprintf-js. The registry has no patched release in the currently supported dependency lines. Do not force npm’s proposed framework, ESLint or gray-matter downgrades to hide these findings. Keep monitoring the advisories and validate compatible upstream fixes when available.

Next.js is updated to 16.3.8 with React 19.2.8. The removed next lint command is replaced by flat-config ESLint. Cached-image size measurement runs on the next animation frame and cancels on unmount. The public main branch blocks deletion and force pushes. No external hosting connection was changed.

## Validation

- ``: `npm run lint` passed.
- ``: `npm run build` passed.

The secret scanner uses an exact version and verified download checksum. Reviewed public keys, test fixtures, token hashes and localStorage names are exempted only by their exact historical commit fingerprints; new occurrences still require review. No secret values are included in the notes or scan output.

The scoped ESLint override selects eslint-import-resolver-typescript 3.10.1 within Next’s supported 3.x range. It removes the old globby/synckit dependency chain while keeping the Next 16 lint configuration. Lint and the production build pass with the replacement.
