require('dotenv').config()
const axios = require('axios');

async function callApi() {
    try {
        const response = await axios.get(process.env.API_URL);
        console.log('Chamada para a API feita com sucesso: ', response.data);
    } catch (error) {
        console.error('Erro ao fazer chamada para a API:', error.message);
    }
}

function main() {
    callApi()
    setInterval(callApi, 60000); // Chama a função callApi a cada 60 segundos (60000 milissegundos)
}

main();
