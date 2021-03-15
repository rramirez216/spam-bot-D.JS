require('dotenv').config()
const { Client } = require('discord.js')
const client = new Client()

client.login(process.env.discordBotToken)

client.on('ready', () => console.log(`${client.user.tag} has logged in.`));