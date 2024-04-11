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
            `Camera: ${Math.floor(this.Game.Camera.PositionX)}, ${Math.floor(this.Game.Camera.PositionY)}, ${Math.floor(this.Game.Camera.Zoom)}`,
            `Camera ease: ${this.Game.Camera.EaserX.EndPosition} ${this.Game.Camera.EaserY.EndPosition}`
        ]

        this.P5.fill("white")
        this.P5.textSize(15)

        this.P5.text(
            Lines.join("\n"),
            this.Game.Camera.RootPositionX + 20,
            this.Game.Camera.RootPositionY + 40
        )
    }
}