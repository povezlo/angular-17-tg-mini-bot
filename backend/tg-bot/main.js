import { Telegraf, Markup } from "telegraf";
import { message } from "telegraf/filters";

const token = "6839005835:AAHnqVMwvbrz8mZy-5uzFceW7YAZ8aSPTZQ";
const webAppUrl = "https://angular-tg-app-54f8c.web.app/";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Добро пожаловать! Нажмите кнопку ниже, чтоб запустить приложение",
    Markup.keyboard([
      Markup.button.webApp("Отправить сообщение", `${webAppUrl}/feedback`),
    ])
  );
});

bot.on(message("web_app_data"), async (ctx) => {
  const data = await ctx.webAppData.data.json();
  ctx.reply(`Ваше сообщение: ${data?.feedback ?? "empty message"}`);
});

bot.launch();
