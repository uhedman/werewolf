import { SlashCommandBuilder } from 'discord.js';

// Command Builder export
export const data = new SlashCommandBuilder()
    .setName('bardo')
    .setDescription('Bardear a tincho');

// Execute function export
export async function execute(interaction) {
    await interaction.reply('<@421182869432565769> puto');
}