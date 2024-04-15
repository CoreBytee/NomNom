import Clamp from "../Helpers/Clamp.js"
import Round from "../Helpers/Round.js"

export default class LocalPlayer {
    constructor(Game) {
        this.Game = Game
        this.P5 = Game.P5

        this.PositionX = 2500
        this.PositionY = 2500

        this.DirectionX = 0
        this.DirectionY = 0
    }

    Setup() {

    }

    PreDraw() {
        if (this.Game.State != "Game") { return }

        const NewDirectionX = Round(Clamp(this.Game.MouseOffsetX / (this.P5.width / 4), -1, 1), 2)
        const NewDirectionY = Round(Clamp(this.Game.MouseOffsetY / (this.P5.height / 4), -1, 1), 2)
        const DirectionChanged = NewDirectionX != this.DirectionX || NewDirectionY != this.DirectionY
        
        if (DirectionChanged) {
            this.DirectionX = NewDirectionX
            this.DirectionY = NewDirectionY

            this.Game.SendMessage(
                "DirectionChanged",
                {
                    DirectionX: this.DirectionX,
                    DirectionY: this.DirectionY
                }
            )
        }
    }

    Draw() {
        if (this.Game.State != "Game") { return }
        this.P5.fill(255, 0, 0)
        this.P5.stroke(0, 0, 0)
        this.P5.circle(
            this.PositionX,
            this.PositionY,
            50
        )

        this.Game.Camera.EasePosition(
            this.PositionX,
            this.PositionY,
            10
        )
    }

    AfterDraw() {

    }
}