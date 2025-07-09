#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

const WEBPACK_CACHE_DIRECTORY = path.resolve(__dirname, '..', 'node_modules', '.cache', 'webpack');

try {
  await fs.rm(WEBPACK_CACHE_DIRECTORY, { force: true, recursive: true });
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}
