import {CST} from "../CST";

var Lamy;
var shot;
var height;
var width;
var game;

export class Game extends Phaser.Scene{
    constructor(){
        super({
            key:CST.SCENES.GAME
        })
    }
     
    create(){
        height = this.game.renderer.height;
        width = this.game.renderer.width
        game = this.game;
        shot = false;
        Lamy = this.add.image(height / 2, width / 2, "Yukihana");
        let leftEdge = this.add.graphics({
            fillStyle:{
                color: 0xff8800
            }
        })
        let rigbtEdge = this.add.graphics({
            fillStyle:{
                color: 0xff8800
            }
        })
        this.keyboard = this.input.keyboard.addKeys("A, D, Space");
        this.game.input.mouse.capture = true;
        leftEdge.fillRect( 0, 0, 10, height);
        leftEdge.fillRect( width - 10, 0, 10, height);
    }

    update(){
        if(this.keyboard.A.isUp === true || this.keyboard.D.isUp === true){
        }
        if(this.keyboard.A.isDown === true){
            Lamy.rotation -= 0.03;
        }
        if(this.keyboard.D.isDown === true){
            Lamy.rotation += 0.03; 
        }
        if(this.keyboard.Space.isDown === true && shot === false){
            console.log("Pew!");
            shot = true;
        }
        if(this.keyboard.Space.isUp === true){
            shot = false;
        }
    }
}