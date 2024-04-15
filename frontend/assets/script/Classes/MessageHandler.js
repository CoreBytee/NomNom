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
                this.Game.PlayerId = Data.Id
                break

            case "UpdatePositions":
                Data.Players.forEach(
                    (Player) => {
                        console.log(Player.Id, this.Game.PlayerId, Player.Id == this.Game.PlayerId)
                        if (Player.Id == this.Game.PlayerId) {
                            this.Game.LocalPlayer.PositionX = Player.PositionX
                            this.Game.LocalPlayer.PositionY = Player.PositionY
                            return
                        }
                        this.Game.Players[Player.Id].PositionX = Player.PositionX
                        this.Game.Players[Player.Id].PositionY = Player.PositionY
                    }
                )
                break
        
            default:
                console.error("Unknown message type: " + Message.Type)
                break;
        }
    }
}