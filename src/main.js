import Phaser from 'phaser'

import MainGameScene from './scenes/MainGameScene'
import MainUI from './scenes/UI'

const config = {
	type: Phaser.AUTO,
	width: 700,
	height: 700,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [MainGameScene, MainUI]
}

export default new Phaser.Game(config)
