import {CST} from "../CST";

export class Load extends Phaser.Scene{
    constructor(){
        super({
            key:CST.SCENES.LOAD
        })
    }

    init(){

    }

    preload(){
        //load all my stuff
        this.load.image("play", "./assets/play.png");
        this.load.image("Yukihana", "./assets/shooter.png");

        //loading bar
        let loadingBar = this.add.graphics({
            fillStyle:{
                color: 0xffffff
            }
        })

        this.load.on("progress", (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width  * percent, 50);
            console.log(percent*100);
        })

        this.load.on("complete",()=>{
            this.scene.start(CST.SCENES.MENU);
        })
    }

    create(){
    }

}
