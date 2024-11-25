import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
//ARREGLO CON 3 OBJETOS
let personas = [
  { nombre: "Karen", apellido: "Mendez", cedula: "3298361002" },
  { nombre: "Gabriela", apellido: "Altamirano", cedula: "1755841002" },
  { nombre: "Genesis", apellido: "Mendoza", cedula: "1755783002" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>PERSONAS</Text>
      <FlatList
        style={styles.lista}
        data={personas}
        renderItem={(elemento) => {
          return (
            //RETORNAR UN VIEW NOS AYUDA PAR RETONAR VARIOS ELEMENTOS
            <View style={styles.intemPersonas}>
              <Text style={styles.textoPrincipal}>
                {elemento.index} {elemento.item.nombre} {elemento.item.apellido}{" "}
              </Text>
              <Text style={styles.textoSecunadario}>
                {elemento.item.cedula}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item) => {
          return item.cedula;
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d2691e",
    flexDirection: "column", //EJE PRINCIPAL (VERTICAL)
    justifyContent: "flex-start",
    alignItems: "strech",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  titulo: {
    color: "#fdf5e6",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  lista: {
    //backgroundColor:"#87ceeb"
  },
  intemPersonas: {
    backgroundColor: "#cd853f",
    marginBottom: 10,
    padding: 10,
  },
  textoPrincipal: {
    fontSize: 18,
  },
  textoSecunadario: {
    fontStyle: "italic",
    fontSize: 16,
  },
});
