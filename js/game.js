/* global Phaser */

// Created by: Benjamin Abebe
// Created on: Apr 2025
// This is the Phaser3 game configuration file

// importing scenes
import MenuScene from './menuScene.js'
import GameScene from './gameScene.js'
import SplashScene from './splashScene.js'

// creating new scenes
const menuScene = new MenuScene()
const gameScene = new GameScene()
const splashScene = new SplashScene()

/**
 * Start Phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)
console.log(game)

// load scenes
// Note: remember any "key" is global and CAN NOT be reused!
game.scene.add('menuScene', menuScene)
game.scene.add('gameScene', gameScene)
game.scene.add('splashScene', splashScene)

// the start scene
game.scene.start('splashScene')
