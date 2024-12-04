import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button, Icon , Input} from "@rneui/base";
import { useState } from "react";




export default function App() {
  const [name, setName]=useState();
  return (
    <View style={styles.container}>
      <Text>RNE</Text>
      <Input value={name}
      onChangeText={setName}
      placeholder="INGRESE SU NOMBRE"
      label="Nombre"
      />
      <Text> {name}</Text>
      <Button 
      
        title="OK"
        icon={{
          name: "home", //Nombre del icono, TAMBIEN ES UN ATRIBUTO IMPORTANTE
          type: "antdesign", //Tipo de iconos,TAMBIEN ES UN ATRIBUTO IMPORTANTE
          size: 15, //Tamaño del icono
          color: "white", //Color del icono
        }}
        onPress={()=>{
          Alert.alert("INFO", "Su nombre es " + name)
        }}
      />
      <Button
        title=" CANCEL"
        icon={
          <Icon //ESTE TAG SE PUEDE USAR DENTRO Y FUERA DEL BOTTON
            name="close" //Nombre del icono, TAMBIEN ES UN ATRIBUTO IMPORTANTE
            type="font-awesome" //Tipo de iconos,TAMBIEN ES UN ATRIBUTO IMPORTANTE
            color="white" //Color del icono
          />
        }
      />
      <Icon
        name="youtube-tv" //Nombre del icono, TAMBIEN ES UN ATRIBUTO IMPORTANTE
        type="material-community" //Tipo de iconos,TAMBIEN ES UN ATRIBUTO IMPORTANTE
        color="black" //Color del icono
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
});
