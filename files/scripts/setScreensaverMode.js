const fs = require('fs')
const home = require('os').homedir()

const xscreensaver_conf = fs.readFileSync(`${home}/.xscreensaver`, 'utf8')
const regex = /mode:\s*\S*/gm

let data
if(process.argv[2] == 'blank'){
    data = xscreensaver_conf.replace(regex, 'mode:  blank')
}else{
    data = xscreensaver_conf.replace(regex, 'mode:  off')
}
fs.writeFileSync(`${home}/.xscreensaver`, data)