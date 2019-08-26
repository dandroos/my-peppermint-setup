const fs = require('fs');
const shell = require('shelljs')
const path = require('path')
const home = require('os').homedir()
const colors = require('colors')

module.exports = () => {
    return new Promise((res, rej) => {
        console.info(`Installing favourite fonts..`)
        shell.mkdir('~/.fonts')
        const files = fs.readdirSync(path.join(__dirname, '../files/fonts'))
        files.map((file) => {
            if(shell.exec(`cp ./files/fonts/${file} ~/.fonts`).code !== 0){
                rej('Sorry there was a problem installing your favourite fonts')
            }
        })
        //Google fonts
        console.clear()
        console.info(`Installing Google Fonts (This will take a little while)`)
        if(shell.exec('git clone https://github.com/google/fonts.git ~/temp_google', () => {
            fs.readdirSync(`${home}/temp_google/ofl/`).map((dir) => {
                fs.readdirSync(`${home}/temp_google/ofl/${dir}`).map((file) => {
                    if (path.extname(file) === '.ttf') {
                        if(shell.exec(`cp ~/temp_google/ofl/${dir}/${file} ~/.fonts`).code !== 0){
                            rej(`Sorry there was a problem installing ${file}`)
                        };
                    }
                })
            })
            shell.exec('rm -r ~/temp_google', res)
        }).code !== 0){
            rej('Sorry there was a problem cloning the Google Fonts repository.')
        }
    })
}