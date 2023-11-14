import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import * as ready from './events/ready.js';
import * as start from './commands/start.js';
import * as bardo from './commands/bardo.js';

config();

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
  ],
});

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, ready.execute);

client.on(Events.InteractionCreate, handleInteraction);

client.on(Events.MessageCreate, (message) => {
  if (message.author.bot) return false;
  if (message.content.includes("@here") || message.content.includes("@everyone") || message.type == "REPLY") return false;
  if (message.mentions.has(client.user.id)) {
      message.channel.send(`¡Hola ${message.author}! No me rompas las bolas`);
  }
});

async function handleInteraction(interaction) {
  if (!interaction.isCommand()) return;
  if (interaction.commandName === 'start') {
    await start.execute(interaction);
  }
  if (interaction.commandName === 'bardo') {
    await bardo.execute(interaction);
  }
}

// Login to Discord with your client's token
client.login(process.env.TOKEN);