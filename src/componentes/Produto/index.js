import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { estilos } from './estilos';
import { useContext } from 'react';
import { ProdutoContext } from '../../contexts/ProdutosContext';

export function Produto({ item, adicionar }) {
  const { adicionarProduto } = useContext(ProdutoContext);

  function adicionarNoCarrinho() {
    if (adicionar)
      adicionarProduto(item);
  }
  return (
    <View style={estilos.cartao}>
      <Image style={estilos.imagem} source={item.imagem} />
      <View style={estilos.textoContainer}>
        <Text style={estilos.texto} numberOfLines={1}>{item.texto}</Text>
        <Text style={estilos.preco}>R$ {item.preco}</Text>
      </View>
      {adicionar &&
        <TouchableOpacity style={estilos.botaoAdicionar} onPress={adicionarNoCarrinho}>
          <Text style={estilos.botaoTexto}>+</Text>
        </TouchableOpacity>}
    </View>
  );
}
