import Player from "./Player"

export default class Room {
    constructor(Game, RoomId) {
        this.Game = Game
        this.RoomId = RoomId
        this.Players = []
        this.NextPlayerId = 0

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
        this.Players.forEach(
            (Player) => {
                Player.PositionX += Player.DirectionX * 10
                Player.PositionY += Player.DirectionY * 10
            }
        )

        this.Broadcast(
            "UpdatePositions",
            {
                Players: this.Players.map(
                    (Player) => {
                        return {
                            PositionX: Player.PositionX,
                            PositionY: Player.PositionY,
                            Id: Player.PlayerId
                        }
                    }
                )
            }
        )
    }

    ConnectPlayer(Connection) {
        const NewPlayer = new Player(this, Connection, this.NextPlayerId)
        Connection.data.PlayerId = this.NextPlayerId
        Connection.data.RoomId = this.RoomId
        this.Players.push(NewPlayer)
        this.NextPlayerId++
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

    HandleMessage(Connection, Message) {
        const Player = this.Players.find(
            (Player) => { return Player.PlayerId == Connection.data.PlayerId }
        )

        Player.HandleMessage(Message)
    }
}