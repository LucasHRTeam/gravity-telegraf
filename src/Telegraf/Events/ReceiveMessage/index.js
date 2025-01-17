const { ReceiveCommand } = require('../ReceiveCommand/Command')
const { HandleMessage } = require('./Message')

const ReceiveMessage = (Connection, MessageBot, GravityIA) => {
   Connection.on('message', async (msg) => {
    console.log(msg)
    const prefixBot = '/'
    const verifyTypeMessage = ContentMessage => {
        return typeof ContentMessage?.message?.text == 'string' && ContentMessage?.message?.text.startsWith(prefixBot) ? 'command' : 'message'
    }
    if (verifyTypeMessage(msg) == 'command') {
        const command = msg?.message?.text?.substring(1).split(' ')[0]
        ReceiveCommand(Connection, msg, command)
    } else if (verifyTypeMessage(msg) == 'message') {
        const IAResponse = await GravityIA.RequestForIA(msg?.message?.text)
        msg.reply(IAResponse)
        HandleMessage(Connection)
       }
   })
}

module.exports = { ReceiveMessage }