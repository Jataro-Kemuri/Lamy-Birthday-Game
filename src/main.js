/**@type {import("../typings/phaser")} */

import { Game } from "./scenes/Game";
import { Load } from "./scenes/Load";
import { Menu } from "./scenes/Menu";
import { Tutorial } from "./scenes/Tutorial";

let game = new Phaser.Game({
    width: 700,
    height: 700,
    scene:[
        Load, Menu, Tutorial, Game
    ]
});
