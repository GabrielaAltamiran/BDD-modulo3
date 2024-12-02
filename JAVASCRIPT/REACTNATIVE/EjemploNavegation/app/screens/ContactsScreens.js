import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet, Button } from "react-native";

// Pantalla Contacts
export const Contacts = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>ESTOY EN CONTACTOS</Text>
      <View style={styles.botones}>
        <Button
          color="burlywood"
          title="REGRESAR A PAGINA PRINCIPAL"
          onPress={() => {
            navigation.navigate('HomeNav'); // Regresar explícitamente a la pantalla HomeNav
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  botones: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 12,
    padding: 8,
    borderRadius: 4,
    gap: 10, // Esto separa los botones uniformemente
  },
  texto: {
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
    fontWeight: "bold",
  },
});
