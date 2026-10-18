# Delivery checks and project boundary

This is a React/Vite/TypeScript website with committed text Bun, binary Bun and npm lockfiles. The text `bun.lock` matches the current manifest; `package-lock.json` omits seven direct dependencies and cannot support `npm ci` at the inspected baseline. Its source sitemap identifies `abramsfence.com`; the generic README describes Lovable publication. Neither establishes a currently verified deployment connection.

The `delivery-checks` candidate uses pinned Bun 1.4.3 to run `bun install --frozen-lockfile --ignore-scripts --no-env-file` against the existing text lock, then verifies the manifest and all committed lockfiles remain unchanged. Node 24.14.0 runs the installed TypeScript compiler against `tsconfig.app.json` and the existing `npm run build` script. The install neither runs lifecycle scripts nor loads repository environment files. There is no install fallback, dependency upgrade or lock rewrite. Existing Lovable mirror URLs and integrity hashes remain; the hosted run must prove that the complete frozen lock and its package sources are usable. It receives no injected production/provider secrets and contains no deployment steps, migrations or live tests. Require it only after a green hosted baseline. This adoption does not inspect or modify the existing checked-in `.env` values.

The existing `src/test/example.test.ts` only asserts `true`; it is not behavioral release evidence and is not used as the release gate. A product change needs focused tests of the changed behavior and safe outcome verification. Do not test lead submission, calendar writes, messages or other live provider effects without applicable authorization.

Preserve the existing hosting lifecycle. No current Git-linked Vercel target was found in the inspected team. Do not create a new project, reconnect a domain or publish an older website merely to claim coverage. Resolve target provenance as part of an actual authorized release.

Follow [SOFTWARE_DELIVERY.md](../SOFTWARE_DELIVERY.md) and the adapted skill for proportional brainstorming, planning, independent final-diff review and authorized delivery.
