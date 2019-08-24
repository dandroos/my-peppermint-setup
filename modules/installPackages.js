const packages = require('./packages');
const shell = require('shelljs');
const colors = require('colors');

module.exports = () => {
    return new Promise((res, rej) => {

        packages.apt.map((name) => {
            console.clear();
            console.info(`installing ${name}\n`.green)
            if(shell.exec(`sudo apt --yes --force-yes install ${name}`).code !== 0){
                rej(`Sorry.  There was a problem while installing ${name}`)
            };
            console.info(`\n${name} successfully installed!`.green)
        })

        packages.npm.map((name) => {
            console.clear();
            console.info(`installing ${name}\n`.green)
            if(shell.exec(`npm install -g ${name}`).code !==0){
                rej(`Sorry.  There was a problem while installing ${name}`)
            };
            console.info(`\n${name} successfully installed!`.green)
        })

        // packages.pip3.map((name) => {
        //     console.clear();
        //     console.info(`installing ${name}\n`)
        //     shell.exec(`pip3 install ${name}`);
        //     console.info(`\n${name} successfully installed!`)
        //     setTimeout(() => {
        //         installedPackages.push(name)
        //     }, 2000);
        // })

        packages.special.install.map(({ name, command }) => {
            console.clear();
            console.info(`installing ${name}\n`.green);
            if(shell.exec(command).code !==0){
                rej(`Sorry.  There was a problem while installing ${name}`)
            };
            console.info(`\n${name} successfully installed!`.green)
        })
        
        shell.exec('rm *.deb*')

        res();
    })
}
