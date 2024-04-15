import random from "just-random-integer"

export default class Player {
    constructor(Room, Connection, PlayerId) {
        this.Room = Room
        this.Connection = Connection
        this.PlayerId = PlayerId

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

    SendMessage(MessageType, Data) {
        this.Connection.send(
            JSON.stringify(
                {
                    Type: MessageType,
                    Data: Data
                }
            )
        )
    }
}