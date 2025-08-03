const { MessageMedia } = require('whatsapp-web.js');

module.exports = {
  '!menu': async (client, message) => {
    try {
      const imageUrl = 'https://raw.githubusercontent.com/leninlg/Kenma-Bot.2/main/logo.png';
      const media = await MessageMedia.fromUrl(imageUrl);

      const textoMenu = `
📋 *Menú de Comandos Kenma-Bot*

👾 *Juegos:*
- !ppt [piedra|papel|tijeras]
- !dado
- !moneda
- !8ball [pregunta]

🎭 *Acciones:*
- !abrazo
- !beso
- !pat
- !saludo
- !chocar
- !baile
- !correr
- !duerme
- !enojar
- !llorar

⚙️ *Administración:*
- !tag
- !grupo abrir/cerrar
- !setreglas [texto]
- !reglas
- !setbienvenida [texto]
- !bienvenida
- !setdespedida [texto]
- !despedida

ℹ️ *Utilidad:*
- !menu (este mensaje)

¡Usa los comandos escribiendo el símbolo ! seguido del nombre del comando!
      `;

      await client.sendMessage(message.from, media, { caption: textoMenu });
    } catch (error) {
      console.error('Error en !menu:', error);
      await message.reply('❌ Error al mostrar el menú. Intenta de nuevo más tarde.');
    }
  }
};
