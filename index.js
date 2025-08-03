const { makeWASocket, useSingleFileAuthState, DisconnectReason } = require('@adiwajshing/baileys');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const path = require('path');

const { state, saveState } = useSingleFileAuthState('./auth_info.json');

async function startBot() {
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true
  });

  sock.ev.on('creds.update', saveState);

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === 'close') {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;

      if (reason === DisconnectReason.loggedOut) {
        console.log('🔴 Desconectado: Necesitas escanear el QR de nuevo.');
      } else {
        console.log('🟡 Conexión cerrada, intentando reconectar...');
        startBot();
      }
    } else if (connection === 'open') {
      console.log('✅ Kenma-Bot conectado exitosamente.');
    }
  });

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const m = messages[0];
    if (!m.message || m.key.fromMe) return;

    const body = m.message.conversation || m.message.extendedTextMessage?.text || '';
    const command = body.trim().toLowerCase();

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
      `;

      await sock.sendMessage(m.key.remoteJid, { text: textoMenu });
    }
  });
}

startBot();