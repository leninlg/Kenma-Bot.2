module.exports = {
  '!menu': async (client, message) => {
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
    await message.reply(textoMenu);
  }
};
