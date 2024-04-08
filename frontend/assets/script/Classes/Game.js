import Background from "./Background.js"

export default class Game {
    constructor() {
        new p5(
            (p) => {
                p.setup = () => p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL),
                p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight),
                p.draw = () => this.Draw()
                this.P5 = p
            },
            document.querySelector("body")
        )

        // Constants
        this.PlayfieldHeight = 5000
        this.PlayfieldWidth = 5000

        // Game State
        this.State = "Menu"

        // Objects
        this.Background = new Background(this)
    }

    Draw() {
        console.log("Drawing")
        this.Background.Draw(this.P5)
    }
}