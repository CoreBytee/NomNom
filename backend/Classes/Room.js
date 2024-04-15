import Player from "./Player"

export default class Room {
    constructor(Game, RoomId) {
        this.Game = Game
        this.RoomId = RoomId
        this.Players = []

        this.TickLoop()
    }

    get PlayerCount() {
        return this.Players.length
    }

    TickLoop() {
        let TickCompleted = true

        setInterval(
            () => {
                if (!TickCompleted) {
                    this.Game.Logger.Warning("Previous tick not completed, skipping")
                    return
                }
                TickCompleted = false
                this.Tick()
                TickCompleted = true
            },
            50 // 20 ticks per second
        )
    }

    Tick() {
        
    }

    ConnectPlayer(Connection) {
        const NewPlayer = new Player(Room, Connection)
        this.Players.push(NewPlayer)
    }

    Broadcast(Message, Data, Exclude=[]) {
        this.Players.forEach(
            (TargetPlayer) => {
                if (Exclude.includes(TargetPlayer)) { return }
                if (Exclude.includes(TargetPlayer.Connection)) { return }
                TargetPlayer.SendMessage(Message, Data)
            }
        )
    }
}