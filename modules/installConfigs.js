const shell = require('shelljs');
const path = require('path');
const colors = require('colors');
const fs = require('fs');
const data = require('./confs_and_scripts');

module.exports = () => {
    return new Promise((res, rej) => {

        shell.mkdir('~/bin')

        data.map((configuration) => {
            configuration.src.map = ((src) => {
                if (shell.cp(src, configuration.dest).code !== 0) {
                    rej(`Sorry...there was a problem configuring ${configuration.name}`)
                }
            })
        })
        res();
    })
}