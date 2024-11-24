import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput,Button, View } from "react-native";

export default function App() {
  const [dolares, setDolares] = useState("INGRESE MONTO ");
  const [pesosMexicanos, setPesosMexicano] = useState(
    " "
  );
  const [pesosColombianos, setPesosColombianos] = useState(
    " "
  );
  const [euros, setEuros] = useState(" ");

  const monedaMexicana = 18;
  const monedaColombiana = 4.0;
  const monedadEuros = 0.9;

  return (
    <View style={styles.container}>
      <Text>EJERCIO CONVERTIDOR</Text>
      <Text> </Text>
      <Text>DOLARES</Text>
      <TextInput
        style={styles.cajaDeTexto}
        value={dolares}
        onChangeText={(moneda) => {
          setDolares(moneda);
        }}
      />
      <Text> </Text>
      <Text>PESOS MEXICANOS {pesosMexicanos}</Text>
      <Text> </Text>
      <Text>PESOS COLOMBIANOS {pesosColombianos}</Text>
      <Text> </Text>
      <Text>EUROS {euros}</Text>
      <Text> </Text>
      <Button
      title="TRANSFORMAR A PESOS MEXICANOS"
      onPress={()=>{
        const pesosMexicanos1 = parseFloat(dolares) * monedaMexicana;
        setPesosMexicano(pesosMexicanos1.toFixed(2));
      }}
      />
      <Text> </Text>
      <Button 
      title="TRANSFORMAR A PESOS COLOMBIANOS"
      onPress={()=>{
        const pesosColombianos1 = parseFloat(dolares) * monedaColombiana;
        setPesosColombianos(pesosColombianos1.toFixed(2))
      }}
      />
      <Text> </Text>
      <Button  
      title="TRANSFORMAR A EUROS"
      onPress={()=>{
        const euros1 = parseFloat(dolares) * monedadEuros;
        setEuros(euros1.toFixed(2))
      }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cajaDeTexto: {
    borderColor: "Black",
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
  },
});
