import Range from "../Helpers/Range.js"

export default class Border {
    constructor(Game) {
        this.Game = Game
        this.P5 = Game.P5

        // Constants
        this.BorderColor = "#cc0000"
        this.LineColor = "#ff0000"
        this.LineFactor = 4
    }

    Setup() {

    }

    PreDraw() {
        
    }

    Draw() {
        this.P5.stroke(this.BorderColor)
        this.P5.strokeWeight(20)

        this.P5.rect(
            0,
            0,
            this.Game.PlayfieldWidth,
            this.Game.PlayfieldHeight
        )

        const LineOffset = this.Game.Frame % 100 * this.LineFactor / this.LineFactor

        Range(
            -5000,
            10000,
            100
        ).forEach(
            (X) => {
                
                this.P5.line(
                    X - 5000 + LineOffset,
                    -5000,
                    X + 10000 + LineOffset,
                    10000
                )
                // console.log(X)
            }
        )


    }
}