const fs = require('fs');
const shell = require('shelljs')
const path = require('path')
const home = require('os').homedir()
const colors = require('colors')

module.exports = () => {
    return new Promise((res, rej) => {
        console.info(`Installing favourite fonts..`)
        shell.mkdir('~/.fonts')
        const files = fs.readdirSync('./files/fonts')
        files.map((file) => {
            shell.exec(`cp ./assets/fonts/${file} ~/.fonts`)
        })
        //Google fonts
        console.clear()
        console.info(`Installing Google Fonts (This will take a little while)`)
        shell.exec('git clone https://github.com/google/fonts.git ~/temp_google', () => {
            fs.readdirSync(`${home}/temp_google/ofl/`).map((dir) => {
                fs.readdir(`${home}/temp_google/ofl/${dir}`).map((file) => {
                    if (path.extname(file) === '.ttf') {
                        shell.exec(`cp ~/temp_google/ofl/${dir}/${file} ~/.fonts`);
                    }
                })
            })
            shell.exec('rm -r ~/temp_google', res('Fonts installed'))
        })
    })
}