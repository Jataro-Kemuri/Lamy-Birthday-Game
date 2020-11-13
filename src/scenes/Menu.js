import {CST} from "../CST";

export class Menu extends Phaser.Scene{
    constructor(){
        super({
            key:CST.SCENES.MENU
        })
    }

    create(){
        let playButton = this.add.image(this.game.renderer.height / 2, this.game.renderer.width / 2, "play");

        playButton.setInteractive();
        
        playButton.on("pointerover", () => {
            console.log("Yagoo");
        })

        playButton.on("pointerup", () => {
            console.log("Bye");
            this.scene.start(CST.SCENES.GAME);
        })

        playButton.on("pointerout", () => {
            console.log("Oogay");
        })
    }
}
