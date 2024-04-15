import Room from "./Room"

export default class RoomManager {
    constructor(Game) {
        this.Game = Game
        this.Rooms = []
        this.NextRoomId = 0
    }

    async HandleConnection(Connection) {
        let FoundRoom = this.Rooms.find(Room => Room.PlayerCount < 10)

        if (!FoundRoom) {
            FoundRoom = new Room(this.Game, this.NextRoomId)
            this.Rooms.push(FoundRoom)
            this.NextRoomId++
        }

        this.Game.Logger.Information("Player connected to room " + FoundRoom.RoomId)
        FoundRoom.ConnectPlayer(Connection)
    }

    async HandleMessage(Connection, Message) {
        const FoundRoom = this.Rooms.find(
            (SearchingRoom) => { return SearchingRoom.RoomId == Connection.data.RoomId }
        )

        FoundRoom.HandleMessage(Connection, Message)
    }
}