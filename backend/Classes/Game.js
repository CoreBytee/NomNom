import Logger from "@corebyte/logger";
import Server from "./Server";
import RoomManager from "./RoomManager";

export default class Game {
    constructor() {
        this.Logger = new Logger("Game")
        this.Logger.Information("Loading game...")

        this.RoomManager = new RoomManager(this)
        this.Server = new Server(this)
    }
}