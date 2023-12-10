// apiService.js
import axios from 'axios';

const apiUrl = 'https://www.bocaweb.com.br/apibocaweb';

const apiService = {
    getObjectByName: async (name) => {
        try {
            const response = await axios.get(`${apiUrl}?nome=${name}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao obter objeto da API:', error);
            throw error; // Propague o erro para quem chamou essa função
        }
    },
};

export default apiService;
