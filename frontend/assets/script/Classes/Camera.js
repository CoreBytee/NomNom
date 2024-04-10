import Easer from "./Easer.js"

export default class Camera {
    constructor(Game) {
        this.Game = Game
        this.P5 = Game.P5

        // State
        this.PositionX = 0
        this.PositionY = 0
        this.Zoom = 1

        this.EaserX = new Easer(this)
        this.EaserY = new Easer(this)

    }

    get RootPositionX() {
        return this.PositionX - (this.P5.windowWidth / 2)
    }

    get RootPositionY() {
        return this.PositionY - (this.P5.windowHeight / 2)
    }

    Setup() {
        this.EasePosition(5000, 5000, 300)
    }

    PreDraw() {
        
    }

    Draw() {
        const EaseXResult = this.EaserX.Frame()
        if (EaseXResult) { this.PositionX = EaseXResult }
        const EaseYResult = this.EaserY.Frame()
        if (EaseYResult) { this.PositionY = EaseYResult }

        this.P5.translate(
            -this.PositionX,
            -this.PositionY,
            this.Zoom
        )
    }

    AfterDraw() {
        this.P5.translate(
            0, 0, 0
        )
    }

    SetPositionX(X) {
        this.EaserX.Reset()

        this.PositionX = X
    }

    SetPositionY(Y) {
        this.EaserY.Reset()

        this.PositionY = Y
    }

    SetPosition(X, Y) {
        this.SetPositionX(X)
        this.SetPositionY(Y)
    }

    MovePositionX(DeltaX) {
        this.SetPositionX(this.PositionX + DeltaX)
    }

    MovePositionY(DeltaY) {
        this.SetPositionY(this.PositionY + DeltaY)
    }

    MovePosition(DeltaX, DeltaY) {
        this.MovePositionX(DeltaX)
        this.MovePositionY(DeltaY)
    }

    EasePositionX(X, FrameCount, EasingFunction) {
        this.EaserX.StartEase(
            this.PositionX,
            X,
            FrameCount,
            EasingFunction
        )
    }

    EasePositionY(Y, FrameCount, EasingFunction) {
        this.EaserY.StartEase(
            this.PositionY,
            Y,
            FrameCount,
            EasingFunction
        )
    }

    EasePosition(X, Y, FrameCount, EasingFunction) {
        this.EasePositionX(X, FrameCount, EasingFunction)
        this.EasePositionY(Y, FrameCount, EasingFunction)
    }

    SetZoom(Zoom) {
        this.Zoom = Zoom
    }

    MoveZoom(DeltaZoom) {
        this.SetZoom(this.Zoom + DeltaZoom)
    }
}