const { GeminiIA } = require(".");

class InterfaceGeminiIA extends GeminiIA {
    constructor(ConnectionBot) {
        super()
        this.RequestForIA = async textMessage => {
            const ResponseIA = await this.sendMessage(textMessage)
            return ResponseIA
        }
    }
}

module.exports = {
    InterfaceGeminiIA
}