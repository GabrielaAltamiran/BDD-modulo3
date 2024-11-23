import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const[nombre,setNombre]=useState("INGRESE SU NOMBRE");
  const[apellido,setApelldio]=useState("INGRESE SU APELLIDO");
  const[nombreCompleto,setNombreCompleto]=useState(" ");
  return (
    <View style={styles.container}>
      <Text>Ejemplo Text Input</Text>
      <Text>HOLA {nombreCompleto}</Text>
      <TextInput
      style={styles.cajaText}
        value={nombre}
        onChangeText={(txt)=>{
          setNombre(txt);
        }}
      />
      <TextInput
      style={styles.cajaText}
        value={apellido}
        onChangeText={(txtA)=>{
          setApelldio(txtA);
        }}

      />
      <Button
        title='SALUDAR'
        onPress={()=>{
          let completo = nombre +" "+ apellido;
          setNombreCompleto(completo)
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
  cajaText:{
    borderColor:"black",
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:10,
  }
});
