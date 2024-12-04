import axios from "axios";

const api = axios.create({
  baseURL: "http://tf-lb-20241204172913710900000005-1670721625.us-east-1.elb.amazonaws.com", // Exemplo: URL do backend
});

export default function httpClient() {
  // Função auxiliar para configurar os headers
  function criarConfig(jwt) {
    const headers = {
      "Content-Type": "application/json",
    };

    if (jwt) {
      headers.Authorization = `Bearer ${jwt}`;
    }

    return { headers };
  }

  async function get(rota, jwt) {
    try {
      const config = criarConfig(jwt);
      const response = await api.get(rota, config);
      return response.data; // Retorna diretamente os dados
    } catch (error) {
      tratarErro(error);
    }
  }

  async function post(rota, data, jwt) {
    try {
      const config = criarConfig(jwt);
      const response = await api.post(rota, data, config);
      return response.data;
    } catch (error) {
      tratarErro(error);
    }
  }

  async function put(rota, data, jwt) {
    try {
      const config = criarConfig(jwt);
      const response = await api.put(rota, data, config);
      return response.data;
    } catch (error) {
      tratarErro(error);
    }
  }

  async function patch(rota, data, jwt) {
    try {
      const config = criarConfig(jwt);
      const response = await api.patch(rota, data, config);
      return response.data;
    } catch (error) {
      tratarErro(error);
    }
  }

  async function deleteOne(rota, jwt) {
    try {
      const config = criarConfig(jwt);
      const response = await api.delete(rota, config);
      return response.data;
    } catch (error) {
      tratarErro(error);
    }
  }

  // Função para tratamento de erros
  function tratarErro(error) {

    if (error.response) {
      console.error(`Erro: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      console.error("Nenhuma resposta recebida:", error.request);
    } else {
      console.error("Erro ao configurar a requisição:", error.message);
    }
    throw error; // Propaga o erro para ser tratado onde necessário
  }

  return {
    get,
    post,
    put,
    patch,
    deleteOne,
  };
}
