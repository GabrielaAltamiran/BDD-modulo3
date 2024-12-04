import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GradeForm } from "./app/screens/GradeForm";
import { ListGrade } from "./app/screens/ListGrade";

export default function App() {
  const stackGrade = createStackNavigator();
  return (
    <NavigationContainer>
      <stackGrade.Navigator>
        <stackGrade.Screen name="ListGradeNav" component={ListGrade} />
        <stackGrade.Screen name="GradeFormNav" component={GradeForm} />
      </stackGrade.Navigator>
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
