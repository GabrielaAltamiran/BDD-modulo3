import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, TextInput, Button, Alert, Text, View } from "react-native";

export default function App() {
  const [peso, setPeso] = useState();
  const [estatura, setEstatura] = useState();
  const [resultado, setResultado] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CALCULADORA IMC</Text>

      <Text style={styles.subtitulo}>ESTATURA</Text>
      <TextInput
        style={styles.cajaDeTexto}
        value={estatura}
        onChangeText={setEstatura}
        placeholder="INGRESE SU ESTATURA EN m"
      />
      <Text style={styles.subtitulo}>PESO</Text>
      <TextInput
        style={styles.cajaDeTexto}
        value={peso}
        onChangeText={setPeso}
        placeholder="INGRESE SU PESO EN Kg"
      />
      <Text style={styles.resultado}>
        <Text>SU IMC ES: {resultado}</Text>
      </Text>

      <Button
        title="CALCULAR IMC"
        onPress={() => {
          let pesoFloat = parseFloat(peso);
          let estaturaMetro = parseFloat(estatura) / 100;
          let resultado = pesoFloat / (estaturaMetro * estaturaMetro);
          setResultado(resultado.toFixed(2)); //HACE QUE EL RESUTADO SALGA CON 2 DECIMALES
          if (resultado < 18.5) {
            Alert.alert("IMC", "SU PESO ES INFERIOR AL NORMAL");
          }
          if (resultado >= 18.5 && resultado <= 25) {
            Alert.alert("IMC", "SU PESO ES NORMAL");
          }
          if (resultado >= 25 && resultado <= 30) {
            Alert.alert("IMC", "SU PESO ES SUPERIOR AL NORMAL");
          }
          if (resultado > 30) {
            Alert.alert("IMC", "TIENE OBESIDAD");
          }
          if (!resultado ) {
            Alert.alert("ERROR", "NO SE REALIZO EL CALCULO POR FALTA DE DATOS"); //RESULTADP
            //EL " ! " AL PRINCIPIO, NOS AYUDA A QUE SALGA LA ALERTA SI ES NULL, NaN, UNDEFINED 
          }
          if (!peso) {
            Alert.alert("ERROR", "DEBE INGRRESAR PESO"); //PESO-LE HAGO ESTO PARA QUE INGRESE DATOS
          }
          if (!estaturaMetro) {
            Alert.alert("ERROR", "DEBE INGRESAR ESTATURA"); //ESTATURA
          }
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
  },
  cajaDeTexto: {
    borderColor: "gray",
    borderWidth: 1,
    color: "black",
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontWeight: "bold",
    margin: 10,
  },
  titulo: {
    color: "blue",
    fontWeight: "bold", //QUE LA LETRA SE HAGA NEGRITA
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
  },
  resultado: {
    color: "black",
    fontWeight: "bold",

    fontSize: 15,
    textAlign: "center",
    margin: 12,
  },
  subtitulo: {
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
  },
});
