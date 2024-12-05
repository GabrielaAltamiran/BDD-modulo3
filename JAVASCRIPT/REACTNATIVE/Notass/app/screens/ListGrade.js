import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { getGrades } from "../services/GradeServices";
import { FAB, ListItem, Avatar } from "@rneui/base";

export const ListGradeFrom = ({ navigation }) => {
  //------------------------------------------
  const ItemGrade = ({ nota }) => {
    //----------------ListItem--------------------
    return (
      <TouchableOpacity onPress={()=>{
        navigation.navigate("GradeFormNav",{notita:nota}); // Ayuda para pasar informacion se asi {notita:nota}  y en el otro componente {route.params.notira} eso se colca en la panatalla de navegacion
      }}> 
        <ListItem bottomDivider>
          <Avatar
            title={nota.subject.substring(0, 1)}
            containerStyle={{ backgroundColor: "#00a7f7" }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>{nota.subject}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content>
            <ListItem.Title>{nota.grade}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={getGrades()}
        renderItem={({ item }) => {
          return <ItemGrade nota={item} />;
        }}
        keyExtractor={(item) => {
          return item.subject;
        }} // Nos permite identificar cada item
      />
      <FAB
        title="+"
        placement="right" // Posicíon del botón
        onPress={() => {navigation.navigate("GradeFormNav",{notita:null})}} // Nos ayuda a navegar a otra pantalla y cuando no se pase informacion es null
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
