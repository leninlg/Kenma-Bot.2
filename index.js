const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const acciones = require('./acciones');
const emociones = require('./emociones');
const juegos = require('./juegos');
const admin = require('./admin');
const menu = require('./menu');

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ Bot listo');
});

client.on('message', async (message) => {
  if (!message.body) return; // Ignorar mensajes sin texto

  const command = message.body.trim().split(' ')[0].toLowerCase();
  if (!command) return; // Ignorar si no hay comando

  const comandos = { ...acciones, ...emociones, ...juegos, ...admin, ...menu };

  if (comandos[command]) {
    try {
      await comandos[command](client, message);
    } catch (err) {
      console.error('❌ Error al ejecutar comando:', err);
      client.sendMessage(message.from, 'Hubo un error al ejecutar el comando.');
    }
  }
});

client.initialize();
