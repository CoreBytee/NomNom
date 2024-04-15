import Easer from "./Easer.js"

export default class Camera {
    constructor(Game) {
        this.Game = Game
        this.P5 = Game.P5

        // State
        this.PositionX = 0
        this.PositionY = 0
        this.Zoom = 0

        this.EaserX = new Easer(this)
        this.EaserY = new Easer(this)
        this.EaserZoom = new Easer(this)

    }

    get RootPositionX() {
        return this.PositionX - (this.P5.windowWidth / 2)
    }

    get RootPositionY() {
        return this.PositionY - (this.P5.windowHeight / 2)
    }

    Setup() {

    }

    PreDraw() {
        
    }

    Draw() {
        const EaseXResult = this.EaserX.Frame()
        if (EaseXResult) { this.PositionX = EaseXResult }

        const EaseYResult = this.EaserY.Frame()
        if (EaseYResult) { this.PositionY = EaseYResult }

        const EaseZoomResult = this.EaserZoom.Frame()
        if (EaseZoomResult) { this.Zoom = EaseZoomResult }

        this.P5.translate(
            -this.PositionX,
            -this.PositionY,
            this.Zoom
        )
    }

    AfterDraw() {
        this.P5.translate(
            0, 0, -this.Zoom
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
        this.EaserZoom.Reset()

        this.Zoom = Zoom
    }

    MoveZoom(DeltaZoom) {
        this.SetZoom(this.Zoom + DeltaZoom)
    }

    EaseZoom(Zoom, FrameCount, EasingFunction) {
        this.EaserZoom.StartEase(
            this.Zoom,
            Zoom,
            FrameCount,
            EasingFunction
        )
    }
}