export default class RoomManager {
    constructor(Game) {
        this.Game = Game
        this.Rooms = []
    }

    async HandleConnection(Connection) {
        let FoundRoom = this.Rooms.find(Room => Room.PlayerCount < 10)

        if (!FoundRoom) {
            FoundRoom = new Room(this.Game, this.Rooms.length)
            this.Rooms.push(Room)
        }

        this.Game.Logger.Information("Player connected to room " + FoundRoom.RoomId)
        FoundRoom.ConnectPlayer(Connection)
    }
}