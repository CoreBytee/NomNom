import Logger from "@corebyte/logger";
import Server from "./Server";

export default class Game {
    constructor() {
        this.Logger = new Logger("Game")
        this.Logger.Information("Loading game...")

        this.Server = new Server(this)
    }
}