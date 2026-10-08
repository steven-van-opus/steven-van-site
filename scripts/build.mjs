import { cp, mkdir, rm } from 'node:fs/promises';
// Explicit allowlist: never publish repository metadata or deployment configuration.
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const path of ['index.html', 'productions.html', 'images', 'videos']) {
  await cp(path, `dist/${path}`, { recursive: true });
}
console.log('Static portfolio built in dist/');
