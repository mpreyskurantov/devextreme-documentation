#!/usr/bin/env node

const { gitget } = require('gitget');
const fs = require('fs');
const { join } = require('path');

const version = process.argv[2];
const repoDemos = 'JSDemos';
const localDemos = `${repoDemos}Temp`;
const menuMetaFileName = 'menuMeta.json';

gitget({
    user: "DevExpress",
    repo: "devextreme-demos",
    branch: version,
    subdir: repoDemos,
    folder: localDemos
}).then(res => {
    fs.copyFileSync(join(localDemos, menuMetaFileName), join('metadata', menuMetaFileName));
    fs.rmSync(localDemos, { recursive: true });
});
