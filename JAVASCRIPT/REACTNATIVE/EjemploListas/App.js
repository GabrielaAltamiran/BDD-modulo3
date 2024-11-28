import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  Alert,
} from "react-native";
//ARREGLO CON 3 OBJETOS
let personas = [
  { nombre: "Karen", apellido: "Mendez", cedula: "3298361002" },
  { nombre: "Gabriela", apellido: "Altamirano", cedula: "1755841002" },
  { nombre: "Genesis", apellido: "Mendoza", cedula: "1755783002" },
];
//esNuevo si se esta creando una nueva persona o se esta modificando una exitente
let esNuevo = true;
//esta variable almacena el indice del arreglo del elemento seleccionado para edicion
let indiceSeleccionado = -1;

export default function App() {
  const [txtCedula, setTxtCedula] = useState();
  const [txtNombre, setTxtNombre] = useState();
  const [txtApellido, setTxtApellido] = useState();
  const [numElemento, setNumElemento] = useState(personas.length);
  //-------------------------------------------------------
  let ItemPersona = (props) => {
    // componente para  renderizar cada item
    return (
      //RETORNAR UN VIEW NOS AYUDA PAR RETONAR VARIOS ELEMENTOS
      <View style={styles.intemPersonas}>
        <View style={styles.itemIndeces}>
          <Text> {props.indice}</Text>
        </View>
        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincipal}>
            {props.persona.nombre} {props.persona.apellido}{" "}
          </Text>
          <Text style={styles.textoSecunadario}>{props.persona.cedula}</Text>
        </View>
        <View style={styles.itemBotones}>
          <Button
            title=" ✎ " //EDITAR
            color="goldenrod" //AQUI SE LE AGREGA EL COLOR PARA EL BOTON Y ENSETE CASO SE ESCRIBE EL NOMBRE NO EL CODIGO DEL COLOR
            onPress={() => {
              setTxtNombre(props.persona.nombre);
              setTxtApellido(props.persona.apellido);
              setTxtCedula(props.persona.cedula);
              esNuevo = false;
              indiceSeleccionado = props.indice;
            }}
          />
          <Button
            title=" ✘ " //ELIMINAR
            color="burlywood"
            onPress={() => {
              indiceSeleccionado = props.indice;
              personas.splice(indiceSeleccionado, 1); //SE BORRAR O ELIMINA EL ELEMENTO
              console.log("Arreglo personas", personas);
              setNumElemento(personas.length);
            }}
          />
        </View>
      </View>
    );
  };
  //-------------------------------------------------------
  //FUNSION LIMPIAR
  let limpiar = () => {
    setTxtCedula(null); //SE HACE UN SET A UNA VARIABLE DE ESTADO Y SE REPINTA LA PANTALLA
    setTxtNombre(null);
    setTxtApellido(null);
    esNuevo = true;
  };
  //FUNSION EXITE PERSONA
  let exitePersona = () => {
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].cedula == txtCedula) {
        return true;
      }
    }
    return false;
  };
  // FUNSION GUARDAR PERSONA
  let guardarPersona = () => {
    // Verificamos si los campos están vacíos o son null
    if (txtNombre == null || txtApellido == null || txtCedula == null || txtNombre.trim() === "" || txtApellido.trim() === "" || txtCedula.trim() === "") {
      Alert.alert("ERROR", "Debe ingresar todos los campos");
    } else {
      // Si los campos están completos, continuamos con las siguientes validaciones
  
      // Verificamos que la cédula tenga exactamente 10 caracteres
      if (txtCedula.length !== 10) {
        Alert.alert("ERROR", "La cédula debe tener exactamente 10 caracteres");
      } else {
        // Si la cédula tiene 10 caracteres, verificamos si la persona ya existe
        if (exitePersona) {
          Alert.alert(
            "INFO",
            "Ya existe una persona con el número de cédula: " + txtCedula
          );
        } else {
          // Si no existe la persona, la agregamos al arreglo
          let persona = {
            nombre: txtNombre,
            apellido: txtApellido,
            cedula: txtCedula,
          };
  
          // Si es un nuevo registro, agregamos la persona al arreglo
          if (esNuevo) {
            personas.push(persona);
          } else {
            // Si estamos editando una persona, actualizamos la información
            personas[indiceSeleccionado].nombre = txtNombre;
            personas[indiceSeleccionado].apellido = txtApellido;
            personas[indiceSeleccionado].cedula = txtCedula;
          }
  
          // Limpiamos los campos
          limpiar();
  
          // Actualizamos la cantidad de elementos en el arreglo
          setNumElemento(personas.length);
        }
      }
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text style={styles.titulo}>PERSONAS</Text>

        <TextInput
          style={styles.txt} //AGREGAR CEDULA
          value={txtCedula}
          placeholder="INGRESE SU CEDULA"
          onChangeText={setTxtCedula}
          keyboardType="numeric"
          editable={esNuevo}
        />
        <TextInput //AGREGAR NOMBRE
          style={styles.txt}
          value={txtNombre}
          placeholder="INGRESE SU NOMBRE"
          onChangeText={setTxtNombre}
        />
        <TextInput //AGREGAR APELLIDO
          style={styles.txt}
          value={txtApellido}
          placeholder="INGRESE SU APELLIDO"
          onChangeText={setTxtApellido}
        />
        <View style={styles.areaBotones}>
          <Button
            title="Guardar" //BOTONES
            color="darkgoldenrod"
            onPress={() => {
              guardarPersona();
            }}
          />
          <Button
            title="Nuevo" //BOTONES
            color="darkgoldenrod"
            onPress={() => {
              limpiar();
            }}
          />
          <Text style={styles.numElemento}>ELEMENTOS: {numElemento}</Text>
        </View>
      </View>
      <View style={styles.areaContenido}>
        <FlatList
          style={styles.lista}
          data={personas}
          renderItem={(elemento) => {
            return (
              <ItemPersona indice={elemento.index} persona={elemento.item} />
            );
          }}
          keyExtractor={(item) => {
            return item.cedula;
          }}
        />
      </View>
      <View style={styles.areaPiePagiana}>
        <Text>Autor: Gabriela Altamirano</Text>
      </View>
    </View>
  );
}
//-------------------------------ESTILOS-----------------------
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
    margin: 15,
  },
  lista: {
    //backgroundColor:"#87ceeb"
  },
  intemPersonas: {
    marginTop: 12,
    backgroundColor: "#cd853f",
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
  },
  textoPrincipal: {
    fontSize: 18,
  },
  textoSecunadario: {
    fontStyle: "italic",
    fontSize: 16,
  },
  areaCabecera: {
    flex: 5.6,
    //backgroundColor: "#808080",
    justifyContent: "center",
    padding: 1,
  },
  areaContenido: {
    flex: 6,
    //backgroundColor: "#f4a460",
  },
  areaPiePagiana: {
    flex: 1,
    flexDirection: "column",
    //backgroundColor: "#8fbc8f",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 1, //ME AYUDA PARA QUE EL TEXTO SE PONGA EN LA APRTE DERECHA
  },
  itemIndeces: {
    //backgroundColor: "#deb887",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
  },
  itemContenido: {
    //backgroundColor: "#ff7f50",
    flex: 6,
    padding: 1,
  },
  itemBotones: {
    flexDirection: "row",
    padding: 1,
    flex: 2,
    //backgroundColor: "#deb887",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 1,
  },
  txt: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 10,
    margin: 5,
  },
  areaBotones: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 1,
  },
  numElemento: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 10,
    color: "#fdf5e6",
    fontStyle: "italic",
  },
});
