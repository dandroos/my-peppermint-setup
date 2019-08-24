const shell = require('shelljs');
const installPackages = require('./modules/installPackages');
const installFonts = require('./modules/installFonts');
const installConfigs = require('./modules/installConfigs');
const colors = require('colors');

installPackages().then(() => {
    console.clear()
    console.info('Packages installed'.green)
    console.info('\nReady to install fonts? (Hit ENTER to continue or CTRL + C to exit)'.magenta)
    shell.exec('read')
    installFonts().then(() => {
        console.clear()
        console.info('Fonts installed'.green)
        console.info('\nReady to configure your installation? (Hit ENTER to continue or CTRL + C to exit)'.magenta)
        shell.exec('read')
        installConfigs().then(() => {
            console.clear()
            console.info('Installation configured'.green)
            console.info('\nTime to finish up! (Hit ENTER to continue or CTRL + C to exit)'.magenta)
            shell.exec('read')
        }).catch((err) => console.error(err))
    }).catch((err) => console.error(err))
}).catch((err) => console.error(err))