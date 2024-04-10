import Range from "../Helpers/Range.js"

export default class Background {
    constructor(Game) {
        this.Game = Game
        this.P5 = Game.P5

        // Constants
        this.BackgroundColor = "#282828"
        this.LineColor = "#1e1e1e"
        this.StepSize = 100

        // State
        this.IdleDirection = 1

    }

    Setup() {
        if (this.Game.State == "Menu") {
            this.Game.Camera.SetPosition(
                2500,
                2500
            )
        }
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

            if (Camera.PositionX < 1000 || Camera.PositionY < 1000) { this.SwapIdleDirection() }
            if (Camera.PositionX > 4000 || Camera.PositionY > 4000) { this.SwapIdleDirection() }

            Camera.MovePosition(
                this.IdleDirection,
                this.IdleDirection
            )
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

    AfterDraw() {
        
    }

    SwapIdleDirection() {
        this.IdleDirection *= -1
    }
}