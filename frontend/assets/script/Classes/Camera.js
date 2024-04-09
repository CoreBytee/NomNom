export default class Camera {
    constructor(Game) {
        this.Game = Game
        this.P5 = Game.P5

        // State
        this.PositionX = 0
        this.PositionY = 0
        this.Zoom = 1
    }

    Setup() {
        
    }

    PreDraw() {
        
    }

    Draw() {
        this.P5.translate(
            -this.PositionX,
            -this.PositionY,
            this.Zoom
        )
    }

    SetPositionX(X) {
        this.PositionX = X
    }

    SetPositionY(Y) {
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

    SetZoom(Zoom) {
        this.Zoom = Zoom
    }

    MoveZoom(DeltaZoom) {
        this.SetZoom(this.Zoom + DeltaZoom)
    }
}