import staticPlugin from "@elysiajs/static";
import Elysia from "elysia";

export default class Server {
    constructor(Game) {
        this.Game = Game
        this.App = new Elysia()
        this.App.use(staticPlugin({ assets: "frontend", prefix: "/"}))

        console.log
        this.App.listen(
            process.env.SERVER_PORT,
            () => this.Game.Logger.Information("Server is running on port " + process.env.SERVER_PORT)
        )
    }
}