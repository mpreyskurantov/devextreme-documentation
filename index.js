#!/usr/bin/env node

const fetch = require('node-fetch');
const fs = require('fs');

const version = process.argv[2];
const menuMetaFileName = 'menuMeta.json';

fetch(`https://raw.githubusercontent.com/DevExpress/devextreme-demos/${version}/JSDemos/${menuMetaFileName}`)
    .then(res => {
        const dest = fs.createWriteStream(`./metadata/${menuMetaFileName}`);
        res.body.pipe(dest);
    });