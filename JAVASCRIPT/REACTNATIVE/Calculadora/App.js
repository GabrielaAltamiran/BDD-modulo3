import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text,TextInput,Button, View } from 'react-native';

export default function App() {
  const [numero1,setNumero1]=useState("INGRESE VALOR 1");
  const [numero2,setNumero2]=useState("INGRESE VALOR 2");
  const [suma,setSuma]=useState(" ");
  const [resta,setResta]=useState(" ");
  const [multiplicacion, setMultiplicaccion]=useState(" ");
  /*LO USE  "<Text>  </Text>" POR EL MOMNETO PARA TERNER ESPACIOS*/
  return (
    <View style={styles.container}>
      <Text>EJERCIO CALCULADORA</Text>
      <TextInput
      style={styles.cajaDeTexto}
      value={numero1}
      onChangeText={(num)=>{
        setNumero1(num);
      }}
      />
      
      <Text>  </Text>
      <TextInput
      style={styles.cajaDeTexto}
      value={numero2}
      onChangeText={(num)=>{
        setNumero2(num);
      }}
      />
      <Text>  </Text>
      <Text>RESULTADO DE SUMAR {suma}</Text>
      <Text>   </Text>
      <Button
      title='SUMAR'
      onPress={()=>{
        let sumar = parseFloat(numero1) + parseFloat(numero2);
        setSuma(sumar);
      }}
      />
      <Text>     </Text>
      <Text>RESULTADO DE RESTAR {resta}</Text>
      <Button
      title='RESTAR'
      onPress={()=>{
        let restar = parseFloat(numero1) - parseFloat(numero2);
        setResta(restar);
      }}
      />
      <Text>    </Text>
      <Text>RESULTADO MULTIPLICACCION {multiplicacion}</Text>
      <Button
        title='MULTIPLICAR'
        onPress={()=>{
          let multiplica = parseFloat(numero1) * parseFloat(numero2);
          setMultiplicaccion(multiplica)
        }}      
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaDeTexto:{
    borderColor:"green",
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:10,
  }
});
