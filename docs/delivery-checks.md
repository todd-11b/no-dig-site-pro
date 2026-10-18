# Delivery checks and project boundary

This is a React/Vite/TypeScript website with a committed npm lockfile. Its source sitemap identifies `abramsfence.com`; the generic README describes Lovable publication. Neither establishes a currently verified deployment connection.

The `delivery-checks` candidate runs `npm ci`, the installed TypeScript compiler against `tsconfig.app.json`, and `npm run build`. It injects no production/provider secrets and contains no deployment steps, migrations or live tests. Require it only after a green hosted baseline. Keep the committed lockfile; do not replace dependencies to make a check appear green. This adoption does not inspect or modify the existing checked-in `.env` values.

The existing `src/test/example.test.ts` only asserts `true`; it is not behavioral release evidence and is not used as the release gate. A product change needs focused tests of the changed behavior and safe outcome verification. Do not test lead submission, calendar writes, messages or other live provider effects without applicable authorization.

Preserve the existing hosting lifecycle. No current Git-linked Vercel target was found in the inspected team. Do not create a new project, reconnect a domain or publish an older website merely to claim coverage. Resolve target provenance as part of an actual authorized release.

Follow [SOFTWARE_DELIVERY.md](../SOFTWARE_DELIVERY.md) and the adapted skill for proportional brainstorming, planning, independent final-diff review and authorized delivery.
