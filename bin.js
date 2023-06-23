#! /usr/bin/env node
const fs = require('fs-extra');
const parseArgs = require('yargs-parser');

const exit = (code) => process.exit(code);
const writeLn = (s) => process.stdout.write(`${s}\n`);

const parseBoolean = (b) => b === true || b === 1;
const parseString = (s) => typeof s === 'boolean' ? '' : String(s || '');

const help = `Usage:
npx @ape-framework/starter <name> [--ts | --js] [-f | --force]

Options:
--ts         TypeScript template (default).
--js         JavaScript template.
-f, --force  Remove existing project.`;

const options = parseArgs(process.argv.slice(2));
const args = options._;
delete options._;

const name = parseString(args[0]);
if (!name || name === 'help') { writeLn(help); exit(); }

const ts = parseBoolean(options.ts);
const js = parseBoolean(options.js);
if (ts && js) throw new Error('Options "--ts" and "--js" cannot be used together');

const force = parseBoolean(options.f) || parseBoolean(options.force);

const exists = fs.existsSync(name);
if (exists && !force) {
  throw new Error('Project already exists, use "-f" or "--force" to remove existing project');
}

const template = js ? 'javascript' : 'typescript';

console.log(args, options);
console.log({ name, ts, js, force, exists, template });
