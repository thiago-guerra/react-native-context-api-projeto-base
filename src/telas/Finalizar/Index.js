import { TouchableOpacity, View, Text, Alert } from "react-native";
import { TemaContext } from "../../contexts/TemaContext";
import { estilos } from "./estilos";
import { useContext } from "react";
import { AutenticacaoContext } from "../../contexts/AutenticacaoContext";
import { ProdutoContext } from "../../contexts/ProdutosContext";

export default function Finalizar({ navigation }) {
    const { temaEscolhido } = useContext(TemaContext);
    const estilo = estilos(temaEscolhido);
    const { usuario } = useContext(AutenticacaoContext);
    const { carrinho, limparCarrinho } = useContext(ProdutoContext);
    let quantidade = carrinho.length;
    let total = calcularTotal();

    function calcularTotal() {
        let total = 0;
        carrinho.forEach(item => {
            total += item.preco;
        });
        return `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

   async function finalizarCompra() {
        await limparCarrinho();
        navigation.navigate('Principal');
        Alert.alert('Compra finalizada com sucesso!');
    }

    return (
        <View style={estilo.container}>
            <View style={estilo.infoEntrega}>
                <Text style={estilo.textoInfoEntrega}>Informações de entrega</Text>
                <View style={estilo.infoUsuario}>
                    <Text style={estilo.textoInfoUsuario}>Nome: {usuario.nome}</Text>
                    <Text style={estilo.textoInfoUsuario}>Endereço: {usuario.endereco}</Text>
                    <Text style={estilo.textoInfoUsuario}>Email: {usuario.email}</Text>
                    <Text style={estilo.textoInfoUsuario}>Telefone: {usuario.telefone}</Text>
                </View>
            </View>
            <View style={estilo.infoCompra}>
                <Text>Quantidade: {quantidade}</Text>
                <Text>Preço Total: {total}</Text>
            </View>
            <TouchableOpacity onPress={finalizarCompra}>
                <Text style={estilo.botao}>Finalizar</Text>
            </TouchableOpacity>
        </View>
    )
}