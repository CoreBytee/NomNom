import EaseOutCirc from "../Helpers/Easing.js"

export default class Easer {
    constructor(Camera) {
        this.Camera = Camera

        this.StartPosition = null
        this.EndPosition = null
        this.EasingFunction = null

        this.StepSize = null
        this.Step = null
    }

    Reset() {
        this.StartPosition = null
        this.EndPosition = null
        this.EasingFunction = null

        this.StepSize = null
        this.Step = null
    }

    StartEase(StartPosition, EndPosition, FrameCount, EasingFunction) {
        this.StartPosition = StartPosition
        this.EndPosition = EndPosition

        this.EasingFunction = EasingFunction
        if (this.EasingFunction === undefined) { this.EasingFunction = EaseOutCirc }

        this.Step = 0
        this.StepSize = 60 / FrameCount / 100
    }

    CheckFinished() {
        return this.Step >= 1
    }

    Frame() {
        if (this.CheckFinished()) {
            const End = this.EndPosition
            this.Reset()
            return End
        }
        if (this.StartPosition == null) { return false }

        this.Step = this.Step + this.StepSize

        return this.StartPosition + (this.EndPosition - this.StartPosition) * this.EasingFunction(this.Step)
    }
}