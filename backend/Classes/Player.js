import random from "just-random-integer"

export default class Player {
    constructor(Room, Connection, PlayerId) {
        this.Room = Room
        this.Connection = Connection
        this.PlayerId = PlayerId

        this.PositionX = random(100, 5000 - 100)
        this.PositionY = random(100, 5000 - 100)

        this.DirectionX = 0
        this.DirectionY = 0

        this.SendMessage(
            "Spawn",
            {
                PositionX: this.PositionX,
                PositionY: this.PositionY,
                Id: this.PlayerId
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

    HandleMessage(Message) {
        const MessageType = Message.Type
        const MessageData = Message.Data

        switch (MessageType) {
            case "DirectionChanged":
                this.DirectionX = MessageData.DirectionX
                this.DirectionY = MessageData.DirectionY
                break;
        
            default:
                break;
        }
    }
}