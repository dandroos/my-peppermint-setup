//confs_and_scripts.js

module.exports = [
	//TINT2	
	{
		name: 'tint2',
		src: ['./files/conf/tint2/tint2rc'],	
		dest: '~/.config/tint2/'	
	},

	//CONKY
	{
		name: 'conky',
		src: ['./files/conf/conky/.conkyrc'],
		dest: '~/'
	},

	//LXSESSION
	{
		name: 'lxsession',
		src: ['./files/conf/lxsession/desktop.conf', './files/conf/lxsession/autostart'],
		dest: '~/.config/lxsession/Peppermint/'
	},

	//NITROGEN
	{
		name: 'nitrogen',
		src: ['./files/conf/nitrogen/nitrogen.cfg', './files/conf/nitrogen/bg-saved.cfg'],
		dest: '~/.config/nitrogen/'
	},

	//CEREBRO
	{
		name: 'cerebro',
		src: ['./files/conf/cerebro/config.json'],
		dest: '~/.config/Cerebro/'
	},

	//OPENBOX
	{
		name: 'openbox',
		src: ['./files/conf/openbox/menu.xml', './files/conf/openbox/rc.xml'],
		dest: '~/.config/openbox/'
	},
	
	//XSCREENSAVER
	{
		name: 'xscreensaver',
		src: ['./files/conf/xscreensaver/.xscreensaver'],
		dest: '~/'
	},

	//VSCODE (settings.json)
	{
		name: 'vscode settings json',
		src: ['./files/conf/vscode/settings.json'],
		dest: '~/.config/Code/User/'
	},

	//VSCODE (extensions)
	{
		name: 'vscode extensions',
		src: ['./files/conf/vscode/extensions/*'],
		dest: '~/.vscode/extensions/'
	},
	
	//DEFAULT APPS (mimeapps)
	{
		name: 'mimeapps',
		src: ['./files/conf/mimelist/mimeapps.list'],
		dest: '~/.config/'
	},

	//MY SCRIPTS
	{
		name: 'my scripts',
		src: [
			'./files/scripts/connect_screen.py',
			'./files/scripts/get-screensaver-status.sh',
			'./files/scripts/get-current-volume.sh',
			'./files/scripts/setScreensaverMode.js',
			'./files/scripts/show-timer.sh',
			'./files/scripts/toggle-screensaver-status.sh',
			'./files/scripts/toggle-timer.sh',
			'./files/scripts/volume-up.sh',
		],
		dest: '~/bin'
	}
]