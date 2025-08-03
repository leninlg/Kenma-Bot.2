const { MessageMedia } = require('whatsapp-web.js');

module.exports = {
  '!abrazo': async (client, message) => {
    const gif = 'https://media.tenor.com/kCZjTqCKiggAAAAC/hug.gif';
    const media = await MessageMedia.fromUrl(gif);
    await client.sendMessage(message.from, media, {
      caption: `🤗 *${message._data.notifyName} da un abrazo muy fuerte!*`
    });
  },

  '!beso': async (client, message) => {
    const gif = 'https://media.tenor.com/IuPq-P3H0L8AAAAC/anime-kiss.gif';
    const media = await MessageMedia.fromUrl(gif);
    await client.sendMessage(message.from, media, {
      caption: `😘 *${message._data.notifyName} da un beso tierno!*`
    });
  },

  '!pat': async (client, message) => {
    const gif = 'https://media.tenor.com/ZD2iU3CIt4kAAAAC/anime-pat-head.gif';
    const media = await MessageMedia.fromUrl(gif);
    await client.sendMessage(message.from, media, {
      caption: `🖐️ *¡${message._data.notifyName} da una palmadita cariñosa!*`
    });
  },

  '!saludo': async (client, message) => {
    const gif = 'https://media.tenor.com/T7NWrwUXRQYAAAAC/hello-wave.gif';
    const media = await MessageMedia.fromUrl(gif);
    await client.sendMessage(message.from, media, {
      caption: `👋 *${message._data.notifyName} te saluda con alegría!*`
    });
  },

  '!chocar': async (client, message) => {
    const gif = 'https://media.tenor.com/1z3WcHrFd68AAAAC/high-five.gif';
    const media = await MessageMedia.fromUrl(gif);
    await client.sendMessage(message.from, media, {
      caption: `✋ *${message._data.notifyName} te da un choque de manos!*`
    });
  },

  '!baile': async (client, message) => {
    const gif = 'https://media.tenor.com/hXUyP1G6yIoAAAAC/dance-anime.gif';
    const media = await MessageMedia.fromUrl(gif);
    await client.sendMessage(message.from, media, {
      caption: `💃 *${message._data.notifyName} está bailando con ritmo!*`
    });
  },

  '!correr': async (client, message) => {
    const gif = 'https://media.tenor.com/Zx8q8xFE5nsAAAAC/running-anime.gif';
    const media = await MessageMedia.fromUrl(gif);
    await client.sendMessage(message.from, media, {
      caption: `🏃 *${message._data.notifyName} está corriendo rápido!*`
    });
  },

  '!duerme': async (client, message) => {
    const gif = 'https://media.tenor.com/2eR2fuAxTx8AAAAC/anime-sleepy.gif';
    const media = await MessageMedia.fromUrl(gif);
    await client.sendMessage(message.from, media, {
      caption: `😴 *${message._data.notifyName} está durmiendo plácidamente.*`
    });
  },

  '!enojar': async (client, message) => {
    const gif = 'https://media.tenor.com/NwJgnGv20xIAAAAC/anime-angry.gif';
    const media = await MessageMedia.fromUrl(gif);
    await client.sendMessage(message.from, media, {
      caption: `😠 *¡${message._data.notifyName} está muy enojado!*`
    });
  },

  '!llorar': async (client, message) => {
    const gif = 'https://media.tenor.com/kD0YYK54HrgAAAAC/anime-sad.gif';
    const media = await MessageMedia.fromUrl(gif);
    await client.sendMessage(message.from, media, {
      caption: `😢 *${message._data.notifyName} está llorando...*`
    });
  }
};
