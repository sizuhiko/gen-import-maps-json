#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const packageLockJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package-lock.json')));
const noDevPackages = Object.entries(packageLockJson.dependencies).filter(([, package]) => !package.dev );
const ignorePolyfills = noDevPackages.filter(([name,]) => !name.startsWith('@webcomponents/webcomponentsjs'));
const importMaps = ignorePolyfills.reduce((map, [name,]) => {
  const packagePath = `/node_modules/${name}/`;
  map.imports[`${name}/`] = packagePath;
  const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), packagePath, 'package.json')));
  if (packageJson.main) {
    map.imports[name] = path.join(packagePath, packageJson.main);
  }
  return map;
}, {imports: {}});

process.stdout.write( JSON.stringify(importMaps, null, 2) + "\n" );
process.exit();
