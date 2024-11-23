import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Alert,Button} from 'react-native';

export default function App() {
  const finalizar=()=>{
    Alert.alert("MENSAJE ","SU SE HA FINALIZADO")
  }
  return (
    <View style={styles.container}>
      <Text>EJEMPLO BOTONES</Text>
      <StatusBar style="auto" />
      <Button 
      title='INICIAR'
      onPress={()=>{
        Alert.alert("MENSAJE","SU SESION HA INICIADO")
      }}
    />
    <Button 
      title="FINALIZAR"
      onPress={
        finalizar
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
