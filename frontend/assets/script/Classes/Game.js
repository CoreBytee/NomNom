import Background from "./Background.js"
import Border from "./Border.js"
import Camera from "./Camera.js"
import Debug from "./Debug.js"

export default class Game {
    constructor() {
        new p5(
            (p) => {
                p.setup = () => {p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL); this.Setup()},
                p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight),
                p.draw = () => this.Draw()
                this.P5 = p
            },
            document.querySelector("body")
        )

        // Constants
        this.PlayfieldHeight = 5000
        this.PlayfieldWidth = 5000

        // Game State
        this.Socket = null
        this.State = "Menu"
        this.Frame = 0

        // Objects
        this.Debug = new Debug(this)
        this.Camera = new Camera(this)
        this.Background = new Background(this)
        this.Border = new Border(this)

        this.Hook()
    }

    Setup() {
        const Font = this.P5.loadFont("assets/font/monofont.otf")
        this.P5.textFont(Font)

        this.Camera.Setup()
        this.Debug.Setup()
        this.Border.Setup()
        this.Background.Setup()
    }

    Draw() {
        this.Frame++
        this.P5.clear()

        this.Camera.PreDraw()
        this.Border.PreDraw()
        this.Background.PreDraw()
        this.Debug.PreDraw()

        this.Camera.Draw()
        this.Border.Draw()
        this.Background.Draw()
        this.Debug.Draw()

        this.Camera.AfterDraw()
        this.Border.AfterDraw()
        this.Background.AfterDraw()
        this.Debug.AfterDraw()

    }

    Hook() {
        { // Hook Playbutton
            const PlayButton = document.getElementById("playbutton")
            const UsernameInput = document.getElementById("usernameinput")

            PlayButton.addEventListener(
                "click",
                () => { this.Connect(UsernameInput.value) }
            )
        }
    }

    SetState(StateName) {
        document.body.setAttribute("class", StateName)
        this.State = StateName
    }

    Connect(PlayerName) {
        this.SetState("Connecting")
    }

    Disconnect() {
        this.SetState("Menu")
        this.Socket = null
    }

    
}