import { createContext, useState } from "react";

export const ProdutoContext = createContext({});

export function ProdutoProvider({ children }) {
    const [carrinho, setProdutos] = useState([]);
    const [ultimosVistos, setUltimosVistos] = useState([]);

    function adicionarProduto(item) {
        setProdutos([...carrinho, item]);
        let novoUltimosVistos = new Set(ultimosVistos);
        novoUltimosVistos.add(item);
        setUltimosVistos([...novoUltimosVistos]);
    }

    function limparCarrrinho() {
        setProdutos([]);
    }
    
    return (
        <ProdutoContext.Provider value={
            {
                carrinho,
                adicionarProduto,
                ultimosVistos,
                limparCarrrinho
            }
        }>
            {children}
        </ProdutoContext.Provider>
    )
}