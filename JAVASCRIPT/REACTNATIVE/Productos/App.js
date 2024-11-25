import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';

export default function App() {
  //INICIO ARREGLO DE DATOS (PRODUCTOS)
  let productos= [
    {nombreProducto:"Leche ", categoriaProducto:"Lacteos", precioCompra: 0.95.toFixed(2), precioVenta:1.00.toFixed(2), id:1001},//.toFixed(2) PARA QUE SEAN CON DOS DECIMALES 
    {nombreProducto:"Wisky", categoriaProducto:"Bebidas", precioCompra: 10.00.toFixed(2), precioVenta:10.55.toFixed(2), id:2009},
    {nombreProducto:"Doritos", categoriaProducto:"Snack", precioCompra: 0.50.toFixed(2), precioVenta:0.60.toFixed(2), id:3209},
    {nombreProducto:"Brocoli", categoriaProducto:"Verduras", precioCompra: 0.35.toFixed(2), precioVenta:0.45.toFixed(2), id:5007},
    {nombreProducto:"Platano", categoriaProducto:"Frutas", precioCompra: 0.15.toFixed(2), precioVenta:0.25.toFixed(2), id:4001},

  ];
  //FIN ARREGLO DE DATOS (PRODUCTOS)
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>PRODUCTOS</Text>
      <FlatList
      style={styles.listaProducto}
      data={productos}
      renderItem={(elemento)=>{
        return(
          <View style={styles.item}>
            <Text style={styles.textoPrincipal}>{ elemento.item.nombreProducto} ({elemento.item.categoriaProducto})</Text>
            <Text style={styles.textoSecundario}>USD : { elemento.item.precioVenta}</Text>
          </View>
        )
      }}
      keyExtractor={ (item)=>{
        return item.id;
      }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E1',
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: 'strech',
    paddingTop: 50,
    paddingHorizontal: 20
    
  },
  titulo:{
    fontSize:20,
    color: "#3E2723",
    fontWeight: "bold",
    textAlign: "center",
    margin:15
  },
  listaProducto:{
    //backgroundColor: "#BCAAA4"
  },
  item:{
    padding:10,
    marginBottom:10,
    backgroundColor: "#6D4C41",
    borderRadius:8,
    
    
  },
  textoPrincipal:{
    color:"white",
    fontSize: 17,
    
  },
  textoSecundario:{
    color:"white",
    fontSize:14,
    fontStyle:"italic",
    fontWeight: "bold"
  }
});
