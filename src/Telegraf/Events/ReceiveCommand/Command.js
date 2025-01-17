const { aboutBot, informationOwner, menuBot } = require("../../../UseCases/BotMessages")

const ReceiveCommand = async (Connection, msg, command) => {
        console.log(command, 'comando detectado')
        switch (command) {
            case 'ping':
                const StartDate = performance.now()
                const EndDate = performance.now()
                const MathUptime = EndDate - StartDate
                msg.reply(`Meu ping é ${MathUptime.toFixed(4)} milisegundos`)
                break;
            case 'about':
            case 'start':
                msg.reply(aboutBot)
                break;
            case 'help':
                msg.reply(informationOwner)
                break;
            case 'menu':
                msg.reply(menuBot)
                break;
            default:
                break;
        }
}

module.exports = {
    ReceiveCommand
}