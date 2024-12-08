import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GradeFrom } from "./app/screens/GradeForm";
import { ListGradeFrom } from "./app/screens/ListGrade";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContenidoA } from "./app/screens/ContenidoA";
import { ContenidoB } from "./app/screens/ContenidoB";
import { Icon } from "@rneui/base";

export default function App() {
  const StackGrades = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  const TabNav = () => {
    return (
      <Tab.Navigator >
        <Tab.Screen 
          name="TaBContenidoA"
          component={ContenidoA}
          options={{
            headerShown: false, // sirve para que no se muestre el header (encabezado)
            tabBarLabel: "Configuracción", //sirve para que se  muestre el nombre de la pestaña
            tabBarIcon: () => {
              return <Icon name="setting" type="antdesign" color="black"  />;
            },
          }}
        />
        <Tab.Screen 
          name="TaBContenidoB"
          component={ContenidoB}
          options={{
            headerShown: false, // sirve para que no se muestre el header (encabezado)
            tabBarLabel: "Acerda De", //sirve para que se  muestre el nombre de la pestaña
            tabBarIcon: () => {
              return <Icon name="info-with-circle" type="entypo" color="black" />;
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  // Stack Navigator para las pantallas de notas
  const GradesStack = () => {
    return (
      <StackGrades.Navigator>
        <StackGrades.Screen name="ListFormNav" component={ListGradeFrom} />
        <StackGrades.Screen name="GradeFormNav" component={GradeFrom} />
      </StackGrades.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {/* Drawer Navigator como principal */}
      <Drawer.Navigator>
        <Drawer.Screen
          name="Notas"
          component={ListGradeFrom}
          options={{ title: "Gestión de Notas" }}
        />
        <Drawer.Screen
          name="EjemploTabs"
          component={TabNav}
          options={{ title: "Ejemplo de Tabs" }}
        />
        <Drawer.Screen
          name="FinalizarSeccion"
          component={ListGradeFrom}
          options={{ title: "Finalizar Sección" }}
        />
      </Drawer.Navigator>
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
