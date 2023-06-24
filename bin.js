#! /usr/bin/env node
const { basename, join } = require('path');
const fs = require('fs-extra');
const parseArgs = require('yargs-parser');

const exit = (code) => process.exit(code);
const writeLn = (s) => process.stdout.write(`${s}\n`);

const parseBoolean = (b) => b === true || b === 1;
const parseString = (s) => typeof s === 'boolean' ? '' : String(s || '');

const options = parseArgs(process.argv.slice(2));
const args = options._;
delete options._;

const help = `Usage:
npx @ape-framework/starter <path> [--ts | --js] [-f | --force]

Options:
--ts         TypeScript template (default).
--js         JavaScript template.
-f, --force  Overwrite existing path.`;

const path = parseString(args[0]);
if (!path || path === 'help') { writeLn(help); exit(); }

const ts = parseBoolean(options.ts);
const js = parseBoolean(options.js);
if (ts && js) throw new Error('Options "--ts" and "--js" cannot be used together');

const force = parseBoolean(options.f) || parseBoolean(options.force);

if (fs.existsSync(path)) {
  if (!force) throw new Error('Path already exists, use "-f" or "--force" to overwrite');
  fs.removeSync(path);
}

const template = js ? 'javascript' : 'typescript';
fs.copySync(join(__dirname, 'template', template), path);

const pkg = fs.readJsonSync(join(path, 'package.json'));
fs.writeJsonSync(join(path, 'package.json'), { ...pkg, name: basename(path) }, { spaces: 2 });
