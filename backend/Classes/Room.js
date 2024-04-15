export default class Room {
    
    constructor(Game, RoomId) {
        this.Game = Game
        this.RoomId = RoomId
        this.Players = []

    get PlayerCount() {
        return this.Players.length
    }
    ConnectPlayer(Connection) {
        const NewPlayer = new Player(Room, Connection)
        this.Players.push(NewPlayer)
    }
}