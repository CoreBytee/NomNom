export default class LocalPlayer {
    constructor(Game) {
        this.Game = Game
        this.P5 = Game.P5

        this.PositionX = 2500
        this.PositionY = 2500
    }

    Setup() {

    }

    PreDraw() {

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