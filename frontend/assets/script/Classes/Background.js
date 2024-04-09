import Range from "../Helpers/Range.js"

export default class Background {
    constructor(Game) {
        this.Game = Game
        this.P5 = Game.P5

        // Constants
        this.BackgroundColor = "#282828"
        this.LineColor = "#1e1e1e"
        this.StepSize = 100

    }

    Setup() {
    }

    PreDraw() {
        this.P5.background(this.BackgroundColor)
    }

    Draw() {
        this.P5.noStroke()
        this.P5.fill(this.BackgroundColor)
        this.P5.rect(
            0,
            0,
            this.Game.PlayfieldWidth,
            this.Game.PlayfieldHeight
        )

        this.P5.strokeWeight(3)
        this.P5.stroke(this.LineColor)
        this.DrawLines()

        if (this.Game.State == "Menu") {
            const Camera = this.Game.Camera

            if (Camera.PositionX < 1000) { Camera.SetPositionX(1000) }
            if (Camera.PositionY < 1000) { Camera.SetPositionY(1000) }

            if (Camera.PositionX > 4000) { Camera.SetPositionX(1000) }
            if (Camera.PositionY > 4000) { Camera.SetPositionY(1000) }

            Camera.MovePosition(1, 1)
        }
    }

    DrawLines() {
        this.P5.stroke(this.LineColor)

        Range(
            0,
            this.Game.PlayfieldWidth + 1,
            this.StepSize
        ).forEach(
            (X) => {
                this.P5.line(X, 0, X, this.Game.PlayfieldHeight)
            }
        )

        Range(
            0,
            this.Game.PlayfieldHeight + 1,
            this.StepSize
        ).forEach(
            (Y) => {
                this.P5.line(0, Y, this.Game.PlayfieldWidth, Y)
            }
        )
    }
}