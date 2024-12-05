import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GradeFrom } from "./app/screens/GradeForm";
import { ListGradeFrom } from "./app/screens/ListGrade";

export default function App() {
  const StackGrades = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackGrades.Navigator>
        <StackGrades.Screen name="ListFormNav" component={ListGradeFrom} />
        <StackGrades.Screen name="GradeFormNav" component={GradeFrom} />
      </StackGrades.Navigator>
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
