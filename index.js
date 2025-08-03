const makeWASocket = require('@whiskeysockets/baileys').default;
const { DisconnectReason, useSingleFileAuthState } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const fs = require('fs');

const { state, saveState } = useSingleFileAuthState('./auth_info.json');

async function startBot() {
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
  });

  sock.ev.on('creds.update', saveState);

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    if(connection === 'close') {
      if((lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut) {
        startBot();
      } else {
        console.log('Desconectado del WhatsApp');
      }
    } else if(connection === 'open') {
      console.log('Conectado y listo!');
    }
  });

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return; // Ignorar mensajes vacíos o propios

    const messageContent = msg.message.conversation || msg.message.extendedTextMessage?.text;
    const from = msg.key.remoteJid;

    if (!messageContent) return;

    const command = messageContent.trim().toLowerCase();

    if (command === '!menu') {
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

      await sock.sendMessage(from, { text: textoMenu });
    }

    // Aquí otros comandos...
  });
}

startBot();