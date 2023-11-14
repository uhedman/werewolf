import { SlashCommandBuilder } from 'discord.js';

// Command Builder export
export const data = new SlashCommandBuilder()
    .setName('start')
    .setDescription('Start new game');

// Execute function export
export async function execute(interaction) {
    await interaction.reply('Comenzando nuevo juego');
}