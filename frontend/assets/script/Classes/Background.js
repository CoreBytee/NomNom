export default class Background {
    constructor(Game) {
        this.Game = Game
        this.P5 = Game.P5

        // Constants
        this.BackgroundColor = "#282828"
        this.LineColor = "#1e1e1e"
    }

    Draw() {
        this.P5.clear()
        this.P5.background(this.BackgroundColor)
    }
}