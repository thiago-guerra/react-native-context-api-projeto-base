import api from '../api';

export async function salvarProduto(produto) {
    try {
        const resposta = await api.post('/produtos', produto);
        return resposta.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}

export async function obterProdutos() {
    try {
        const resposta = await api.get('/produtos/');
        return resposta.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function removerProduto(id) {
    try {
        const resultado = await api.delete(`/produtos/${id}`);
       return true;
    } catch (error) {
        console.log(error + id);
        return false;
    }
}