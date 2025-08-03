
const { create } = require('@open-wa/wa-automate');

create({
  sessionId: 'kenma-bot',
  multiDevice: true,
  headless: true,
  useChrome: false,
}).then(client => start(client));

function start(client) {
  console.log('✅ Kenma-Bot listo');

  client.onMessage(async message => {
    const { body, from } = message;
    const command = body ? body.trim().toLowerCase() : '';

    if (command === '!menu') {
      const imageUrl = 'https://raw.githubusercontent.com/leninlg/Kenma-Bot.2/main/logo.png';

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

      try {
        await client.sendImage(from, imageUrl, 'logo.png', textoMenu);
      } catch (error) {
        console.error('Error al enviar menú:', error);
        await client.sendText(from, '❌ Error al mostrar el menú. Intenta más tarde.');
      }
    }

    // Aquí agregas más comandos...
  });
}