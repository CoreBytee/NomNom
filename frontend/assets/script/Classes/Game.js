import Background from "./Background.js"

export default class Game {
    constructor() {
        new p5(
            (p) => {
                p.setup = () => p.createCanvas(p.windowWidth, p.windowHeight),
                p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight),
                p.draw = () => this.Draw()
                this.P5 = p
            },
            document.querySelector("body")
        )
        console.log(this.P5)

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