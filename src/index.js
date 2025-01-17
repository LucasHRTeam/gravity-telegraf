const { Conection, message: TelegramMessage } = require('./Telegraf/Conection')
const { ReceiveMessage } = require('./Telegraf/Events/ReceiveMessage')
const { InterfaceGeminiIA } = require('./Gemini/interface')

class InitBOT {
    constructor(ConectionBot, MessageBot) {
        this.start = async () => {
            try {
                ConectionBot.launch()
                console.log("Bot iniciado com sucesso!")
                this.NumberofAttempts = 1
            } catch(e) {
                console.log("Tentanto conectar...\nOcorreu o seguinte errooooo: ", e)
            }
        }
        this.LoadMessages = async () => {
            const GravityIA = new InterfaceGeminiIA(this)
            ReceiveMessage(ConectionBot, MessageBot, GravityIA)
        }
    }
}

const GravityBot = new InitBOT(Conection, TelegramMessage)

GravityBot.start()
GravityBot.LoadMessages()
