import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet, Button } from "react-native";

// Export para poder usar el componente en otros archivos
export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>HOME</Text>
      <View style={styles.botones}>
        <Button
          color="burlywood"
          title="Contactos"
          onPress={() => {
            navigation.navigate('ContactsNav'); // Navega a la pantalla ContactsNav
          }}
        />
        <Button
          color="burlywood"
          title="Productos"
          onPress={() => {
            navigation.navigate('ProductsNav'); // Navega a la pantalla ProductsNav
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
