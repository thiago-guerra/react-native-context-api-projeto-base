import { createContext, useEffect, useState } from "react";
import { salvarProduto, obterProdutos, removerProduto } from "../servicos/requisicoes/produtos";

export const ProdutoContext = createContext({});

export function ProdutoProvider({ children }) {
    const [carrinho, setProdutos] = useState([]);
    const [ultimosVistos, setUltimosVistos] = useState([]);

    useEffect(() => {
        async function carregarCarrinho() {
            const resultado = await obterProdutos();
            setProdutos(resultado);
        }
        carregarCarrinho();
    }, [])

    async function adicionarProduto(item) {
        const resultado = await salvarProduto(item);
        setProdutos([...carrinho, resultado]);
        let novoUltimosVistos = new Set(ultimosVistos);
        novoUltimosVistos.add(item);
        setUltimosVistos([...novoUltimosVistos]);
    }

    async function limparCarrinho() {
        var produtos = carrinho;
        if (produtos.length > 0) {
            produtos.forEach(async produto => {
                 await removerProduto(produto.id);
            });
            setProdutos([]);
        }
    }
    return (
        <ProdutoContext.Provider value={
            {
                carrinho,
                adicionarProduto,
                ultimosVistos,
                limparCarrinho
            }
        }>
            {children}
        </ProdutoContext.Provider>
    )
}