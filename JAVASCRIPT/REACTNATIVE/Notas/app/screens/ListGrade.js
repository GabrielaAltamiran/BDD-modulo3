import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { getGrades } from "../services/GradeServices";
import { ListItem, FAB, Avatar } from "@rneui/base";

export const ListGrade = ({ navigation }) => {
  const ItemGrade = ({ nota }) => {
    //Componente
    return (
      <TouchableHighlight onPress={()=>{
        navigation.navigate("GradeFormNav",{notita:nota}); //NAVEGA A LA PANTALLA PRINCIPAL 

      }}>
        <ListItem bottomDivider>
          <Avatar
            title={nota.subject.substring(0, 2)} //HACE QUE APREZCA LA PRIMERA LETRA DEL NOMBRE DE LA MATERIA
            size={64}
            containerStyle={{ backgroundColor: "#deb887" }} //COLOR DEL FONDO
            rounded //QUE SEA EL AVATAR CIRCULAR
          />
          <ListItem.Content>
            <ListItem.Title>{nota.subject}</ListItem.Title>
            <ListItem.Subtitle>{nota.grade}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Content>
            <ListItem.Subtitle>{nota.grade}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron
          //QUE APAREZCA LA FLECHA QUE INDICA VER MAS O MENOS, Y QUE SE PUEDE HACER CLICK SOBRE ESTA MISMA
          />
        </ListItem>
      </TouchableHighlight>
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
        }}
      />
      <FAB //BOTON FLOTANTE, ES UNA PERSONALIZACCION DE BOTON
        title="+"
        placement="right" //Posición del botón
        onPress={() => {
          navigation.navigate("GradeFormNav");
        }}
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
