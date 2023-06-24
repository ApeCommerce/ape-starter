#! /usr/bin/env node
const fs = require('fs-extra');

const devPackage = fs.readJsonSync('package.json');

const pkg = {
  name: `@ape-framework/starter`,
  version: '__version__',
  license: 'MIT',
  author: 'Matthieu Symoens',
  description: '__description__',
  keywords: ['ape', 'api', 'framework', 'node', 'typescript'],
  repository: {
    type: 'git',
    url: 'git+https://github.com/ApeCommerce/ape-starter.git',
  },
  publishConfig: {
    access: 'public',
  },
  bin: devPackage.bin,
  engines: devPackage.engines,
  dependencies: devPackage.dependencies,
};

fs.ensureDirSync('dist');

fs.writeJsonSync(`dist/package.json`, pkg, { spaces: 2 });

fs.copySync('bin.js', 'dist/bin.js');
fs.copySync('template', 'dist/template');
fs.copySync('README.md', `dist/README.md`);
fs.copySync('LICENSE', `dist/LICENSE`);
