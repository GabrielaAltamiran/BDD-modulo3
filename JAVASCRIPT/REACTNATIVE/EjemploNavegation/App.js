import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";

//SE ESTA IMORTANDO UN ARCHIVO DE OTRA CARPETA
import { Home } from "./app/screens/HomeSceens";
import { Contacts } from "./app/screens/ContactsScreens";
import { Products } from "./app/screens/ProductsScreen";
//--------------------------------
const Stack = createNativeStackNavigator(); //EL COMPONENTE QUE DEVUELVE ES EL QUE NOS VA A AYUDAR A LA CONFIGURACION DE NAVEGACION
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeNav" component={Home} options={{
          headerShown: false,  //Elimina la barra de encabezado (incluida la flecha "atrás")
        
        }} />
        <Stack.Screen name="ProductsNav" component={Products} />
        <Stack.Screen name="ContactsNav" component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
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
