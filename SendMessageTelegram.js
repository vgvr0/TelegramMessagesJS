const axios = require('axios');

async function sendMessage(chatId, message) {
  try {
    const token = 'TU_TOKEN_DE_BOT';
    const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    const response = await axios.post(apiUrl, {
      chat_id: chatId,
      text: message,
    });

    if (response.data.ok) {
      console.log('Mensaje enviado con éxito');
    } else {
      console.error('Error al enviar el mensaje:', response.data.description);
    }
  } catch (error) {
    console.error('Error al enviar el mensaje:', error.message);
  }
}