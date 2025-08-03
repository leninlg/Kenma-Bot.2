module.exports = {
  '!ppt': async (client, message) => {
    const opciones = ['piedra', 'papel', 'tijeras'];
    const eleccionBot = opciones[Math.floor(Math.random() * opciones.length)];
    const args = message.body.trim().split(' ');
    if (args.length < 2) return message.reply('Usa: !ppt piedra/papel/tijeras');

    const eleccionUsuario = args[1].toLowerCase();

    if (!opciones.includes(eleccionUsuario)) {
      return message.reply('Por favor, elige piedra, papel o tijeras.');
    }

    let resultado = '';
    if (eleccionUsuario === eleccionBot) {
      resultado = '¡Empate!';
    } else if (
      (eleccionUsuario === 'piedra' && eleccionBot === 'tijeras') ||
      (eleccionUsuario === 'papel' && eleccionBot === 'piedra') ||
      (eleccionUsuario === 'tijeras' && eleccionBot === 'papel')
    ) {
      resultado = '¡Ganaste! 🎉';
    } else {
      resultado = '¡Perdiste! 😢';
    }

    await message.reply(`Tu elegiste: ${eleccionUsuario}\nYo elegí: ${eleccionBot}\n${resultado}`);
  },

  '!dado': async (client, message) => {
    const numero = Math.floor(Math.random() * 6) + 1;
    await message.reply(`🎲 Tiraste el dado y salió: *${numero}*`);
  },

  '!moneda': async (client, message) => {
    const caras = ['Cara', 'Cruz'];
    const resultado = caras[Math.floor(Math.random() * caras.length)];
    await message.reply(`🪙 La moneda cayó en: *${resultado}*`);
  },

  '!8ball': async (client, message) => {
    const respuestas = [
      'Sí',
      'No',
      'Tal vez',
      'Definitivamente',
      'No cuentes con ello',
      'Claro que sí',
      'Pregunta más tarde',
      'No puedo decirlo ahora',
      'Mis fuentes dicen que no',
      'Es seguro que sí'
    ];

    if (message.body.trim().length <= 5) return message.reply('❓ Haz una pregunta completa después del comando.');

    const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];
    await message.reply(`🎱 *La bola mágica dice:* ${respuesta}`);
  }
};
