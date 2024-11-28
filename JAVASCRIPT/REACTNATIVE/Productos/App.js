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
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

// INICIO ARREGLO DE DATOS (PRODUCTOS)
const productos = [
  {
    nombreProducto: "Leche ",
    categoriaProducto: "Lacteos",
    precioCompra: (0.95).toFixed(2),
    precioVenta: (1.0).toFixed(2),
    id: "1001",
  },
  {
    nombreProducto: "Wisky",
    categoriaProducto: "Bebidas",
    precioCompra: (10.0).toFixed(2),
    precioVenta: (10.55).toFixed(2),
    id: "1002",
  },
  {
    nombreProducto: "Doritos",
    categoriaProducto: "Snack",
    precioCompra: (0.5).toFixed(2),
    precioVenta: (0.6).toFixed(2),
    id: "1003",
  },
  {
    nombreProducto: "Brocoli",
    categoriaProducto: "Verduras",
    precioCompra: (0.35).toFixed(2),
    precioVenta: (0.45).toFixed(2),
    id: "1004",
  },
  {
    nombreProducto: "Platano",
    categoriaProducto: "Frutas",
    precioCompra: (0.15).toFixed(2),
    precioVenta: (0.25).toFixed(2),
    id: "1005",
  },
];
// FIN ARREGLO DE DATOS (PRODUCTOS)

let nuevoProducto = true;
let indiceSeleccionado = -1;

export default function App() {
  //------------------VARIABLES DE ESTADO--------------
  const [txtCodigo, setTxtCodigo] = useState();
  const [txtNombreProducto, setTxtNombreProducto] = useState();
  const [txtCategoria, setTxtCategoria] = useState();
  const [txtPrecioCompra, setTxtPrecioCompra] = useState();
  const [txtPrecioVenta, setTxtPrecioVenta] = useState();
  const [numElemento, setNumElemento] = useState(productos.length);
  //---------------------------------------------------

  //-----------------------ItemProducto----------------
  let ItemProducto = (props) => {
    return (
      <View style={styles.ItemProducto}>
        <View style={styles.itemIndeces}>
          <Text>{props.productos.id}</Text>
        </View>

        <View style={styles.itemContenido}>
          <View style={styles.itemTextoContainer}>
            <Text style={styles.textoPrincipal}>
              {props.productos.nombreProducto}
            </Text>
            <Text style={styles.cat}>{props.productos.categoriaProducto}</Text>
          </View>
          <Text style={styles.itemPrecioVenta}>
            {props.productos.precioVenta}
          </Text>
        </View>

        <View style={styles.itemBotones}>
          <Button
            title=" ✎ "
            color="goldenrod"
            onPress={() => {
              setTxtCodigo(props.productos.id);
              setTxtNombreProducto(props.productos.nombreProducto);
              setTxtCategoria(props.productos.categoriaProducto);
              setTxtPrecioCompra(props.productos.precioCompra);
              setTxtPrecioVenta(props.productos.precioVenta);
              nuevoProducto = false;
              indiceSeleccionado = props.indice;
            }}
          />
          <Button
            title=" ✘ "
            color="burlywood"
            onPress={() => {
              indiceSeleccionado = props.indice;
              productos.splice(indiceSeleccionado, 1);
              setNumElemento(productos.length);
            }}
          />
        </View>
      </View>
    );
  };

  //------------------------FUNCIONES------------------

  let limpiarCampos = () => {
    setTxtCodigo(null);
    setTxtNombreProducto(null);
    setTxtCategoria(null);
    setTxtPrecioCompra(null);
    setTxtPrecioVenta(null);
    nuevoProducto = true;
  };

  let existeProducto = () => {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id == txtCodigo) {
        return true;
      }
    }
    return false;
  };

  let guardarProducto = () => {
    if (
      txtCodigo == null ||
      txtNombreProducto == null ||
      txtCategoria == null ||
      txtPrecioCompra == null
    ) {
      Alert.alert("INFO", "Debe llenar todo los campos");
    } else {
      if (existeProducto() && nuevoProducto) {
        Alert.alert(
          "INFO",
          "Ya esta registrado el producto con el código " + txtCodigo
        );
      } else {
        let producto = {
          nombreProducto: txtNombreProducto,
          categoriaProducto: txtCategoria,
          precioCompra: txtPrecioCompra,
          precioVenta: txtPrecioVenta,
          id: txtCodigo,
        };
        if (nuevoProducto) {
          productos.push(producto);
        } else {
          productos[indiceSeleccionado] = producto;
        }
        limpiarCampos();
        setNumElemento(productos.length);
      }
    }
  };

  const precioVenta = (precioCompra) => {
    const precioVentaCalculado = parseFloat(precioCompra) * 1.2;
    setTxtPrecioVenta(precioVentaCalculado.toFixed(2));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.areaCabecera}>
            <Text style={styles.titulo}>PRODUCTOS</Text>
            <TextInput
              style={styles.txt}
              value={txtCodigo}
              placeholder="CODIGO"
              onChangeText={setTxtCodigo}
              keyboardType="numeric"
              editable={nuevoProducto} // Deshabilitado si estamos editando
            />
            <TextInput
              style={styles.txt}
              value={txtNombreProducto}
              placeholder="NOMBRE"
              onChangeText={setTxtNombreProducto}
              keyboardType="default"
            />
            <TextInput
              style={styles.txt}
              value={txtCategoria}
              placeholder="Categoría"
              onChangeText={setTxtCategoria}
              keyboardType="default"
            />

            <TextInput
              style={styles.txt}
              value={txtPrecioCompra}
              placeholder="PRECIO COMPRA"
              onChangeText={(value) => {
                setTxtPrecioCompra(value);
                precioVenta(value);
              }}
              keyboardType="decimal-pad"
            />
            <TextInput
              style={styles.txt}
              value={txtPrecioVenta}
              placeholder="PRECIO VENTA"
              onChangeText={setTxtPrecioVenta}
              keyboardType="decimal-pad"
              editable={false} // No editable para el precio de venta
            />
            <View style={styles.areaBotones}>
              <Button
                title="NUEVO"
                color="darkgoldenrod"
                onPress={() => {
                  limpiarCampos();
                }}
              />
              <Button
                title="GUARDAR"
                color="darkgoldenrod"
                onPress={guardarProducto}
              />
              <Text style={styles.numElemento}>PRODUCTOS: {numElemento}</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.areaContenido}>
          <FlatList
            style={styles.listaProducto}
            data={productos}
            renderItem={(elemento) => {
              return (
                <ItemProducto
                  indice={elemento.index}
                  productos={elemento.item}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View style={styles.areaPiePagiana}>
          <Text>Autor: Gabriela Altamirano</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

//----------------------------------ESTILOS----------
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#f4a460", // Fondo general para la aplicación
    flexDirection: "column", // El contenedor principal sigue siendo columna
    justifyContent: "flex-start",
    alignItems: "stretch", // Asegura que los elementos se extiendan a lo largo del contenedor
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

  // Estilos para los inputs de texto
  txt: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 4,
    margin: 6,
    padding: 7,
    backgroundColor: "#ffe4c4", // Fondo para los campos de entrada
    borderRadius: 5,
    alignItems:"stretch"
  },

  listaProducto: {
    // Puedes agregar más estilos si deseas personalizar la lista
  },

  ItemProducto: {
    marginTop: 1,
    flex: 1,
    backgroundColor: "#cd853f", // Fondo de cada ítem de producto
    marginBottom: 10,
    padding: 10,
    flexDirection: "row", // Disposición horizontal de los elementos en cada fila
    alignItems: "center", // Alineación centrada de los elementos dentro de la fila
    borderRadius: 12,
  },

  codigo: {
    flex: 2,
    fontSize: 16,
    backgroundColor: "#ffebcd", // Fondo para el índice
  },

  textoPrincipal: {
    fontSize: 18,
    margin: 7,
    padding: 3,
    fontWeight: "bold",
  },

  textoSecundario: {
    color: "black",
    fontSize: 14,
    fontStyle: "italic",
    fontWeight: "bold",
    flexDirection: "column",
  },

  areaCabecera: {
    flex: 5,
    justifyContent: "center",
    padding: 1,
  },

  areaContenido: {
    flex: 9,
    margin: 12,
  },

  areaPiePagiana: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 1,
  },

  itemIndeces: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },

  itemContenido: {
    flex: 5,
    padding: 5,
    margin: 3,
    flexDirection: "row",
  },

  itemTextoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 3,
    margin: 1,
  },

  itemPrecioVenta: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 19,
    margin: 3,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  itemBotones: {
    flexDirection: "row",
    padding: 1,
    flex: 3,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 12,
  },

  cat: {
    color: "black",
    fontSize: 16,
    fontStyle: "italic",
    paddingLeft: 5,
  },

  numElemento: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 10,
    color: "#fdf5e6",
    fontStyle: "italic",
    paddingVertical: 5,
  },

  areaBotones: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 1,
  },
});
