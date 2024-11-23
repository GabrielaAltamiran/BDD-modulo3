import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button,Alert, View } from 'react-native';
import{useState}from 'react'
export default function App() {
  /*const arreglo=useState(0);
  const contadorEstado=arreglo[0];
  /*EL SET NOS AYUDAD A CAMBAIR EL VALOR
   const setContadorEstado=arreglo[1];*/
  const [contadorEstado,setContadorEstado]=useState(0);

  const incrementar=()=>{
    setContadorEstado(contadorEstado+1);
  }
  const decrementar=()=>{
    setContadorEstado(contadorEstado-1);
  }
//RESTAR VIDAS
  const[vidas,setVidas]=useState(5);

  const restarVidas=()=>{
    //SE USA SENTENCIA DE CONDICION PARA SABER CUANDO SE DEBE RESTAR VIDA
    if(vidas>0){
      setVidas(vidas-1)
    }
    //NOS AYUDA A SABER QUE SE HA TERMINADO LAS VIDAS
    if(vidas==0){
      Alert.alert("ADVERTENCIA"," GAMER OVER")
    }
  }
  //PREMIAR
  const premiar=()=>{
    setVidas(vidas+3)
  }

  


  return (
    <View style={styles.container}>
      <Text>Variables de Estado</Text>
      <Text>CONTADOR ESTADO: {contadorEstado}</Text>
      <Text>RESTANTE DE VIDAS: {vidas}</Text>
      <Button  
      title="INCREMENTAR"
      onPress={incrementar}
      />
      <Button
        title="DESCREMENTAR"
        onPress={decrementar}
      />
      <Button 
        title="PERDER VIDA"
        onPress={restarVidas}
      />
      <Button
      title="PREMIAR"
      onPress={premiar}  
      
      
      
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
});
