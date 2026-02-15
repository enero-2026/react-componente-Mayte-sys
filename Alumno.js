import { View, Text, StyleSheet} from "react-native-web";

export default function Alumno(props){
    return(
        <View sytle={estilos.contenedor}>
            <Text>{props.nombre}</Text>
            <Text>{props.matricula}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedor: {
    backgroundColor: '#f21818',
    color: '#ffffff'
  },
});