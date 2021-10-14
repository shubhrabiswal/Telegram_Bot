const Quiz = require('../model/quiz')
const UserResponse = require('../model/userResponse')
const dotenv = require('dotenv')
const axios = require('axios')
const { Telegraf } = require('telegraf');
dotenv.config()

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

exports.getanswer = (req, res) => {

    bot.command('start', ctx => {
        console.log(ctx.from)
        bot.telegram.sendMessage(ctx.chat.id, 'hello welcome to askii bot. ', {})
        ctx.reply(`Type COVID(in caps) to enter your response`)
    })

    // bot.on('text', (ctx) => {

    //     ctx.telegram.sendMessage(ctx.message.chat.id, `Hello`)

    //     ctx.reply(`Type covid to enter your response`)
    // })
    bot.hears('COVID', ctx => {
        console.log(ctx.from)
        let queMessage = `How many vaccines shots have been administered to you?
        Select 1 if not vaccinated, 2 if vaccinated with only one dose, 3 if if vaccinated with both doses`;
        // ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.chat.id, queMessage, {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: "1",
                        callback_data: 'one'
                    },
                    {
                        text: "2",
                        callback_data: 'two'
                    },
                    {
                        text: "3",
                        callback_data: 'three'
                    }
                    ],

                ]
            }
        })
    })


    bot.action('one', ctx => {
        console.log("one", ctx)
        bot.telegram.sendMessage(ctx.chat.id,
            'Ok. Your response has been saved', {})

    })


    bot.action('two', ctx => {
        console.log("two", ctx)
        bot.telegram.sendMessage(ctx.chat.id,
            'Ok. Your response has been saved', {})

    })

    bot.action('three', ctx => {
        console.log("three", ctx)
        bot.telegram.sendMessage(ctx.chat.id,
            'Ok. Your response has been saved', {})

    })

    bot.hears('name', (ctx, next) => {
        console.log(ctx.from)
        bot.telegram.sendMessage(ctx.chat.id, 'Enter your name', requestName);

    })


    const requestName = {
        "reply_markup": {
            "one_time_keyboard": true,
            "keyboard": [
                [{
                    text: "Name",
                    request_name: true,
                    one_time_keyboard: true
                }],
                ["Cancel"]
            ]
        }
    };

    bot.launch();
    return res.send("Open Telegram app and search for askii bot")
}
