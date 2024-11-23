import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const despedirse=()=>{
      Alert.alert("MENSAJE","Adiós");
    }
  return (
    <View style={styles.container}>
      <Text>Bienvenido al curso de RN Gabriela Altamirano</Text>
      <StatusBar style="auto" />
      <Button 
      title="OK" 
      //RECIBE UN FUNCION QUE NO RECIBE PARAMETROS
      //NO RETORNA NADA
      onPress={()=>{
        Alert.alert("MENSAJE","Hola desde del botón");
      }}
      />
      <Button 
      title="ADIOS"
      onPress={
        despedirse
      }
      
      
      />
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
