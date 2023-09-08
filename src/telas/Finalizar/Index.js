import { TouchableOpacity, View, Text } from "react-native";
import { TemaContext } from "../../contexts/TemaContext";
import  {estilos}  from "./estilos";
import { useContext } from "react";

export default function Finalizar({ navigation }) {
    const { temaEscolhido } = useContext(TemaContext);
    const estilo = estilos(temaEscolhido);

    return (
        <View style={estilo.container}>
            <TouchableOpacity>
                <Text style={estilo.botao}>Finalizar</Text>
            </TouchableOpacity>
        </View>
    )
}