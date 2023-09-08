import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { TemaContext } from "../../contexts/TemaContext";
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutoContext } from '../../contexts/ProdutosContext';
import { Produto } from '../../componentes/Produto';
import { estilos } from './estilos';

export default function CarrinhoCompras({ navigation }) {
    const { temaEscolhido } = useContext(TemaContext);
    const estilo = estilos(temaEscolhido);
    const { usuario } = useContext(AutenticacaoContext);
    const { carrinho } = useContext(ProdutoContext);

    return (
        <View style={estilo.container}>
          <StatusBar />
          <View style={estilo.tituloArea}>
            <Text style={estilo.titulo}>Olá, {usuario.nome}</Text>
            <View style={estilo.carrinhoArea}>
              <TouchableOpacity onPress={() => { }}>
                <Feather name="shopping-cart" size={30} color="#fff" style={estilo.carrinhoIcon} />
              </TouchableOpacity>
              {
                carrinho.length > 0 &&
                <View style={estilo.carrinhoQuantidadeArea}>
                  <Text style={estilo.carrinhoQuantidade}>{carrinho.length}</Text>
                </View>
              }
              <TouchableOpacity onPress={() => navigation.navigate('Configurações')} style={estilo.iconArea} >
                <MaterialCommunityIcons name="settings" size={30} color="#fff" style={estilo.icon} />
              </TouchableOpacity>
            </View>
          </View>
    
          <FlatList
            data={carrinho}
            keyExtractor={item => Math.random()}
            renderItem={({ item }) => <Produto item={item} adicionar={false} />}
            style={estilo.lista}
            showsVerticalScrollIndicator={false}
          />
          <TouchableOpacity onPress={() => { navigation.navigate('Finalizar')}}>
            <Text style={estilo.botao}>Finalizar Compra</Text>
          </TouchableOpacity>
        </View>
      );
}