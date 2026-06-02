import { createMDX } from 'fumadocs-mdx/next';
import { build } from 'esbuild';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Workaround: fumadocs-mdx postinstall removes the entire .source/ directory,
// which deletes the compiled source.config.mjs. The MDX loader then fails
// because it expects .source/source.config.mjs to exist but loadConfig(build=false)
// skips re-compilation. We ensure the file is present before createMDX starts.
await build({
  entryPoints: [path.resolve(__dirname, 'source.config.ts')],
  outdir: path.resolve(__dirname, '.source'),
  bundle: true,
  target: 'node18',
  platform: 'node',
  format: 'esm',
  packages: 'external',
  outExtension: { '.js': '.mjs' },
  allowOverwrite: true,
});

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/articles/:path*.mdx',
        destination: '/llms.mdx/:path*',
      },
    ];
  },
};

export default withMDX(config);
