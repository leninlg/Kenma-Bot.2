module.exports = {
  '!tag': async (client, message) => {
    const chat = await message.getChat();
    if (!chat.isGroup) return message.reply('Este comando solo funciona en grupos.');

    let text = '';
    let mentions = [];

    for (let participant of chat.participants) {
      const contact = await client.getContactById(participant.id._serialized);
      mentions.push(contact);
      text += `@${participant.id.user} `;
    }

    await chat.sendMessage(text, { mentions });
  },

  '!grupo': async (client, message) => {
    const chat = await message.getChat();
    if (!chat.isGroup) return message.reply('Este comando solo funciona en grupos.');

    const args = message.body.trim().split(' ');
    if (args.length < 2) return message.reply('Usa: !grupo abrir / !grupo cerrar');

    if (args[1].toLowerCase() === 'abrir') {
      await chat.setMessagesAdminsOnly(false);
      await message.reply('✅ El grupo ahora está abierto para que todos puedan enviar mensajes.');
    } else if (args[1].toLowerCase() === 'cerrar') {
      await chat.setMessagesAdminsOnly(true);
      await message.reply('🚫 El grupo ha sido cerrado, solo admins pueden enviar mensajes.');
    } else {
      await message.reply('Uso incorrecto. Usa: !grupo abrir / !grupo cerrar');
    }
  },

  '!setreglas': async (client, message) => {
    const chat = await message.getChat();
    if (!chat.isGroup) return message.reply('Este comando solo funciona en grupos.');

    const reglas = message.body.split(' ').slice(1).join(' ');
    if (!reglas) return message.reply('Por favor escribe las reglas después del comando.');

    global.reglasPorGrupo = global.reglasPorGrupo || {};
    global.reglasPorGrupo[chat.id._serialized] = reglas;

    await message.reply('✅ Reglas guardadas para este grupo.');
  },

  '!reglas': async (client, message) => {
    const chat = await message.getChat();
    if (!chat.isGroup) return message.reply('Este comando solo funciona en grupos.');

    global.reglasPorGrupo = global.reglasPorGrupo || {};
    const reglas = global.reglasPorGrupo[chat.id._serialized];
    if (!reglas) return message.reply('No hay reglas definidas para este grupo.');

    await message.reply(`📜 *Reglas del grupo:*\n${reglas}`);
  },

  '!setbienvenida': async (client, message) => {
    const chat = await message.getChat();
    if (!chat.isGroup) return message.reply('Este comando solo funciona en grupos.');

    const bienvenida = message.body.split(' ').slice(1).join(' ');
    if (!bienvenida) return message.reply('Por favor escribe el mensaje de bienvenida después del comando.');

    global.bienvenidaPorGrupo = global.bienvenidaPorGrupo || {};
    global.bienvenidaPorGrupo[chat.id._serialized] = bienvenida;

    await message.reply('✅ Mensaje de bienvenida guardado.');
  },

  '!bienvenida': async (client, message) => {
    const chat = await message.getChat();
    if (!chat.isGroup) return message.reply('Este comando solo funciona en grupos.');

    global.bienvenidaPorGrupo = global.bienvenidaPorGrupo || {};
    const bienvenida = global.bienvenidaPorGrupo[chat.id._serialized];
    if (!bienvenida) return message.reply('No hay mensaje de bienvenida definido.');

    await message.reply(`👋 *Ahora somos integrantes del grupo.*\n\n${bienvenida}`);
  },

  '!setdespedida': async (client, message) => {
    const chat = await message.getChat();
    if (!chat.isGroup) return message.reply('Este comando solo funciona en grupos.');

    const despedida = message.body.split(' ').slice(1).join(' ');
    if (!despedida) return message.reply('Por favor escribe el mensaje de despedida después del comando.');

    global.despedidaPorGrupo = global.despedidaPorGrupo || {};
    global.despedidaPorGrupo[chat.id._serialized] = despedida;

    await message.reply('✅ Mensaje de despedida guardado.');
  },

  '!despedida': async (client, message) => {
    const chat = await message.getChat();
    if (!chat.isGroup) return message.reply('Este comando solo funciona en grupos.');

    global.despedidaPorGrupo = global.despedidaPorGrupo || {};
    const despedida = global.despedidaPorGrupo[chat.id._serialized];
    if (!despedida) return message.reply('No hay mensaje de despedida definido.');

    await message.reply(`👋 *Se fue del grupo.*\n\n${despedida}`);
  }
};
