const { GoogleGenerativeAI } = require('@google/generative-ai');


class GeminiIA {
    async sendMessage(textMessage) {
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

const prompt = textMessage

const result = await model.generateContent(prompt)
return result.response.text()

    }
}

module.exports = {
    GeminiIA
}