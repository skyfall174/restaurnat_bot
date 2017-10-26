import express from "express"
import bodyParser from 'body-parser';
const cors = require('cors');

const Telegraf = require('telegraf')

const config =
{
  API_KEY: "401388997:AAH0jilJgSvUH8Oq9J_NJ9MLpK6s6rGjmjU"
}

const app = new Telegraf(config.API_KEY)
app.command('start', ({ from, reply }) => {
  console.log('start', from)
  return reply('Welcome!')
})
app.hears('hi', (ctx) => ctx.reply('Hey there!'))
app.on('sticker', (ctx) => ctx.reply('👍'))
app.startPolling()
