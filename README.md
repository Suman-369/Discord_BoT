# Discord_BoT

A Discord bot built with Node.js and JavaScript for text-based chat and AI-powered image generation. This bot uses the Google Gemini API to generate any kind of image via Discord commands.

## Features

- 💬 **Text Chat**: Interact with the bot using text commands.
- 🖼️ **AI Image Generation**: Instantly generate images from text prompts using Google Gemini.
- ⚙️ **Easy Setup**: Quickly deploy with just two environment variables.

## Requirements

- Node.js (v16+ recommended)
- A Discord bot token ([Get one here](https://discord.com/developers/applications))
- A Google Gemini API key ([Get it here](https://ai.google.dev/))

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Suman-369/Discord_BoT.git
   cd Discord_BoT
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the project root 
   ```
   DISCORD_BOT_TOKEN=your_discord_bot_token
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run the bot**
   ```bash
   node index.js
   ```
   > Or use `npm start` if defined in `package.json`.

## Usage

- Invite the bot to your Discord server using your bot application's OAuth2 invite link.
- Use text commands to chat or generate images.
- Example image command: `/imagine <your prompt>` (Check your server for the actual command prefix).

## Notes

- Both `DISCORD_BOT_TOKEN` and `GEMINI_API_KEY` are required for the bot to function.
- The bot is focused on text and image generation only.

## Contributing

Contributions are welcome! Please open an issue or pull request for new features, bug fixes, or suggestions.

## License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by [@Suman-369](https://github.com/Suman-369)
