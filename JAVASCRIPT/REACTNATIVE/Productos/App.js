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
  TouchableOpacity,
  TouchableHighlight,
  Modal,
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

// Inicialización de variables globales
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

  // Estado para mostrar el modal de confirmación de eliminación
  const [modalVisible, setModalVisible] = useState(false);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  //-----------------------ItemProducto----------------
  let ItemProducto = ({ producto, index }) => {
    return (
      <View style={styles.ItemProducto}>
        <View style={styles.itemIndeces}>
          <Text>{producto.id}</Text>
        </View>

        <View style={styles.itemContenido}>
          <View style={styles.itemTextoContainer}>
            <Text style={styles.textoPrincipal}>{producto.nombreProducto}</Text>
            <Text style={styles.cat}>{producto.categoriaProducto}</Text>
          </View>
          <Text style={styles.itemPrecioVenta}>{producto.precioVenta}</Text>
        </View>

        <View style={styles.itemBotones}>
          {/* Botón para editar el producto */}
          <View style={styles.itemBotones}>
            {/* Botón para editar el producto */}
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => {
                setTxtCodigo(producto.id);
                setTxtNombreProducto(producto.nombreProducto);
                setTxtCategoria(producto.categoriaProducto);
                setTxtPrecioCompra(producto.precioCompra);
                setTxtPrecioVenta(producto.precioVenta);
                nuevoProducto = false;
                indiceSeleccionado = producto.id;
              }}
            >
              <View
                style={{
                  styles,
                  flexDirection: "row",
                  padding: 1,
                  flex: 3,
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginHorizontal: 12,
                  backgroundColor: "goldenrod",
                  padding: 8,
                  margin: 20,
                  borderRadius: 4,
                  paddingHorizontal: 10,
                }}
              >
                <Text>✎</Text>
              </View>
            </TouchableHighlight>

            {/* Botón para eliminar el producto con "X" */}
            <Button
              title=" ✘ "
              color="burlywood"
              onPress={() => {
                // Establecemos el producto a eliminar y mostramos el modal
                setProductoAEliminar({ producto, index });
                setModalVisible(true);
              }}
            />
          </View>
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
          productos.push(producto); // Se agrega un nuevo producto al arreglo
        } else {
          productos[indiceSeleccionado] = producto; // Se actualiza el producto existente
        }
        limpiarCampos(); // Limpiar los campos después de guardar
        setNumElemento(productos.length); // Actualiza el contador de productos
      }
    }
  };

  const precioVenta = (precioCompra) => {
    const precioVentaCalculado = parseFloat(precioCompra) * 1.2;
    setTxtPrecioVenta(precioVentaCalculado.toFixed(2)); // Calcula el precio de venta
  };

  // Función para eliminar un producto
  const eliminarProducto = () => {
    // Utilizamos el índice directamente para eliminar el producto
    productos.splice(productoAEliminar.index, 1); // Elimina el producto usando el índice
    setNumElemento(productos.length); // Actualizamos el contador de productos
    setModalVisible(false); // Cerramos el modal de confirmación
  };

  return (
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
            editable={nuevoProducto}
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
              precioVenta(value); // Calcula el precio de venta cuando se ingresa el precio de compra
            }}
            keyboardType="decimal-pad"
          />
          <TextInput
            style={styles.txt}
            value={txtPrecioVenta}
            placeholder="PRECIO VENTA"
            onChangeText={setTxtPrecioVenta}
            keyboardType="decimal-pad"
            editable={false} // El precio de venta no puede ser editado directamente
          />
          <View style={styles.areaBotones}>
            <Button
              title="NUEVO"
              color="darkgoldenrod"
              onPress={limpiarCampos} // Limpia los campos para ingresar un nuevo producto
            />
            <Button
              title="GUARDAR"
              color="darkgoldenrod"
              onPress={guardarProducto} // Guarda o actualiza el producto
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
              <ItemProducto indice={elemento.index} producto={elemento.item} />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.areaPiePagiana}>
        <Text>Autor: Gabriela Altamirano</Text>
      </View>

      {/* Modal de confirmación para eliminar */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text
              style={{
                styles,
                fontWeight: "bold",
                fontSize: 18,
                paddingLeft: 9,
                margin: 9

              }}
            >
              INFO
            </Text>
            <Text>¿Está seguro que quiere eliminar?</Text>
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
              <Button title="Aceptar" onPress={eliminarProducto} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
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
    alignItems: "stretch",
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
    backgroundColor: "red", // Fondo para el índice
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

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    width: "100%",
  },
});
