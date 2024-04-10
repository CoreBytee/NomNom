export default class Debug {
    constructor(Game) {
        this.Game = Game
        this.P5 = Game.P5
    }

    Setup() {

    }

    PreDraw() {

    }

    Draw() {
        

    }

    AfterDraw() {
        const Lines = [
            `Frame: ${this.Game.Frame}`,
            `FPS: ${Math.floor(this.P5.frameRate())}`,
            `State: ${this.Game.State}`,
            `Camera: ${this.Game.Camera.PositionX}, ${this.Game.Camera.PositionY}`,
            `Camera ease: ${this.Game.Camera.EaserX.EndPosition} ${this.Game.Camera.EaserY.EndPosition}`
        ]

        this.P5.fill("white")
        this.P5.textSize(20)

        this.P5.text(
            Lines.join("\n"),
            this.Game.Camera.RootPositionX + 20,
            this.Game.Camera.RootPositionY + 40
        )
    }
}