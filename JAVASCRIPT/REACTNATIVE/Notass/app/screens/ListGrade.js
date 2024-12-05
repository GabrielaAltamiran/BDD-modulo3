import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { getGrades } from "../services/GradeServices";
import { FAB, ListItem, Avatar } from "@rneui/base";
import { useState } from "react";

export const ListGradeFrom = ({ navigation }) => {
  //----------------REFRESCAR LA LISTA--------------------------
  const [time, setTime] = useState();

  const refreshList=()=>{
    setTime(new Date().getTime());
  }
  //------------------------------------------
  const ItemGrade = ({ nota }) => {
    //----------------ListItem--------------------
    return (
      <TouchableOpacity onPress={()=>{
        navigation.navigate("GradeFormNav",{notita:nota,refre:refreshList}); // Ayuda para pasar informacion se asi {notita:nota}  y en el otro componente {route.params.notira} eso se colca en la panatalla de navegacion
      }}> 
        <ListItem bottomDivider>
          <Avatar
            title={nota.subject.substring(0, 1)}
            containerStyle={{ backgroundColor: "#20b2aa" }}
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
        extraData={time}
       
      />
      <FAB
        title="+"
        placement="right" // Posicíon del botón
        color="#66cdaa"
        onPress={() => {navigation.navigate("GradeFormNav",{notita:null ,refre:refreshList})}} // Nos ayuda a navegar a otra pantalla y cuando no se pase informacion es null
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
