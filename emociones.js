const { MessageMedia } = require('whatsapp-web.js');

module.exports = {
  '!feliz': async (client, message) => {
    const gif = 'https://media.tenor.com/B2kXYfQEmdQAAAAC/anime-happy.gif';
    const media = await MessageMedia.fromUrl(gif);
    await client.sendMessage(message.from, media, {
      caption: `😊 *¡${message._data.notifyName} está muy feliz!*`
    });
  },

  '!triste': async (client, message) => {
    const gif = 'https://media.tenor.com/kD0YYK54HrgAAAAC/anime-sad.gif';
    const media = await MessageMedia.fromUrl(gif);
    await client.sendMessage(message.from, media, {
      caption: `😢 *${message._data.notifyName} está triste...*`
    });
  },

  '!enojado': async (client, message) => {
    const gif = 'https://media.tenor.com/NwJgnGv20xIAAAAC/anime-angry.gif';
    const media = await MessageMedia.fromUrl(gif);
    await client.sendMessage(message.from, media, {
      caption: `😠 *¡${message._data.notifyName} está muy enojado!*`
    });
  },

  '!asustado': async (client, message) => {
    const gif = 'https://media.tenor.com/K2a8v8_g-rkAAAAC/anime-scared.gif';
    const media = await MessageMedia.fromUrl(gif);
    await client.sendMessage(message.from, media, {
      caption: `😨 *¡${message._data.notifyName} se asustó!*`
    });
  },

  '!sonrojado': async (client, message) => {
    const gif = 'https://media.tenor.com/Lt5oNlf2ZroAAAAC/anime-blush.gif';
    const media = await MessageMedia.fromUrl(gif);
    await client.sendMessage(message.from, media, {
      caption: `😳 *${message._data.notifyName} se ha sonrojado*`
    });
  }
};
