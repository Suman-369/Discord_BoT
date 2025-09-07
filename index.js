require("dotenv").config();
const { Client, GatewayIntentBits, AttachmentBuilder } = require("discord.js");
const { GoogleGenAI } = require("@google/genai");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const ai = new GoogleGenAI({
  apikey: process.env.GEMINI_API_KEY,
});

async function generateImage(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image-preview",
    contents: prompt,
  });

  const result = { text: null, imageBuffer: null };

  for (const part of response.candidates[0].content.parts) {
    if (part.text) {
      result.text = part.text;
    } else if (part.inlineData) {
      const imageData = part.inlineData.data;
      const buffer = Buffer.from(imageData, "base64");
      result.imageBuffer = buffer;
    }
  }

  return result;
}

client.once("ready", () => {
  console.log("Bot is ready");
});

client.on("messageCreate", async (message) => {
  const isBot = message.author.bot;
  if (isBot) return;

  const greetingWords = [
    "hi",
    "hello",
    "hey",
    "good morning",
    "good afternoon",
    "good evening",
  ];
  const userMessage = message.content.toLowerCase().trim();

  if (greetingWords.some((greeting) => userMessage.includes(greeting))) {
    message.reply(
      "Hello From Charlie I can Generate any kind of picture that you want . "
    );
    return;
  }

  const result = await generateImage(message.content);

  if (result.text) {
    message.channel.send(result.text);
  }

  if (result.imageBuffer) {
    const attachment = new AttachmentBuilder(result.imageBuffer, {
      name: "generated-image.png",
    });
    message.channel.send({ files: [attachment] });
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
