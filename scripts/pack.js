import { cp, mkdir, mkdtemp, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const staging = await mkdtemp(join(tmpdir(), 'jev-crowdpilot-'));
const output = join(root, 'dist', 'jev-crowdpilot-twitch-extension.zip');

try {
  await mkdir(join(root, 'dist'), { recursive: true });
  await rm(output, { force: true });
  await cp(join(root, 'extension', 'overlay.html'), join(staging, 'index.html'));
  execFileSync('zip', ['-q', '-j', output, join(staging, 'index.html')]);
  console.log(`Created ${output}`);
} finally {
  await rm(staging, { recursive: true, force: true });
}
