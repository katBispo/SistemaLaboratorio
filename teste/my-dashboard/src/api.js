import axios from 'axios';

class ApiService {
  constructor() {
    // Configura a instância do axios com a URL base
    this.api = axios.create({
      baseURL: 'http://127.0.0.1:8080/equipamentos'  // URL base para seu backend
    });
  }

  // Adiciona um método para fazer um POST
  async postEquipamento(data) {
    try {
      const response = await this.api.post('', data);  // Endpoint para o POST é a URL base + o caminho do POST
      return response.data;  // Retorna os dados da resposta
    } catch (error) {
      console.error('Erro ao fazer o POST:', error);
      throw error;  // Lança o erro para que possa ser tratado onde o método é chamado
    }
  }
}

const apiService = new ApiService();  // Cria uma instância da classe

export default apiService;