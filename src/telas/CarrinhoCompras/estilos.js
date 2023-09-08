import Constants from 'expo-constants';
import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
export const estilos = (tema) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: tema.fundo,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tituloArea: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      paddingTop: Constants.statusBarHeight,
      marginBottom: 16,
    },
    titulo: {
      fontSize: 20,
      fontWeight: 'bold',
      color: tema.titulo,
    },
    lista: {
      flex: 1,
      width: '100%',
    },
    ultimosVistos: {
      marginBottom: 16,
      paddingVertical: 16,
      backgroundColor: tema.ultimosVistos,
    },
    tituloUltimosVistos: {
      fontSize: 18,
      fontWeight: 'bold',
      color: tema.titulo,
      marginHorizontal: 16,
      marginBottom: 8,
    },
    carrinhoArea: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    carrinhoIcon: {
      fontSize: 30,
      fontWeight: 'bold',
      color: tema.titulo,
    },
    carrinhoQuantidadeArea: {
      backgroundColor: 'red',
      borderRadius: 10,
      width: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    carrinhoQuantidade: {
      fontSize: 12,
      fontWeight: 'bold',
      color: "#fff",
    },
    iconArea: {
      marginLeft: 16,
    },
    icon: {
      color: tema.texto,
      fontSize: 30,
    },
    botao: {
      backgroundColor: tema.botao,
      color: tema.textoBotao,
      fontSize: 18,
      fontWeight: 'bold',
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 8,
      marginBottom: 16,
      width: 0.9 * width,
      textAlign: 'center',
    },
  });
} 