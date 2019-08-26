const shell = require('shelljs');
const data = require('./confs_and_scripts');

module.exports = () => {
    return new Promise((res, rej) => {

        shell.mkdir('~/bin')

        data.map((configuration) => {
            configuration.src.map((src) => {
                console.log(src)
                if (shell.cp(src, configuration.dest).code !== 0) {
                    // rej(`Sorry...there was a problem configuring ${configuration.name}`)
                    console.log(`Sorry...there was a problem configuring ${configuration.name}`)
                }
            })
        })

        //xfce4 display dim on battery setting to zero
        if(shell.exec('xfconf-query -c xfce4-power-manager -p /xfce4-power-manager/brightness-on-battery -s 0').code !== 0){
            rej('Sorry...there was a problem configuring brightness-on-display in XFCE')
        }
        //...and disable display power management
        if(shell.exec('xfconf-query -c xfce4-power-manager -p /xfce4-power-manager/dpms-enabled -s false').code !== 0){
            rej('Sorry...there was a problem configuring dpms-enabled in XFCE')
        }
        res();
    })
}