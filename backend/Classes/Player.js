import random from "just-random-integer"

export default class Player {
    constructor(Room, Connection) {
        this.Room = Room
        this.Connection = Connection

        this.PositionX = random(100, 5000 - 100)
        this.PositionY = random(100, 5000 - 100)

        this.SendMessage(
            "Spawn",
            {
                PositionX: this.PositionX,
                PositionY: this.PositionY
            }
        )
    }
}