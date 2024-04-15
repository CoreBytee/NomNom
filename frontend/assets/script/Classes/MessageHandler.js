export default class MessageHandler {
    constructor(Game) {
        this.Game = Game
    }

    HandleMessage(RawMessage) {
        console.log(RawMessage)
        const Message = JSON.parse(RawMessage)
        const Data = Message.Data

        switch (Message.Type) {
            case "Spawn":
                this.Game.LocalPlayer.PositionX = Data.PositionX
                this.Game.LocalPlayer.PositionY = Data.PositionY
                break;
        
            default:
                console.error("Unknown message type: " + Message.Type)
                break;
        }
    }
}