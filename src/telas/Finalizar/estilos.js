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
          infoEntrega:{
            backgroundColor: '#1b7894',
            borderRadius: 8,
            width: 0.9 * width,
            marginTop: 16
        },
          textoInfoEntrega:{
            color: '#fff',
            fontSize: 27,
            fontWeight: 'bold',
            paddingVertical: 16,
            paddingHorizontal: 20,
          },
          textoInfoUsuario:{
            color: '#fff',
            fontSize: 16,
          },
          infoUsuario: {
            paddingHorizontal: 20,
            marginBottom: 16,
          },
          infoCompra: {
            flex: 1,
            width: 0.9 * width,
            paddingHorizontal: 20,
            paddingVertical: 16,
          }
    });
};