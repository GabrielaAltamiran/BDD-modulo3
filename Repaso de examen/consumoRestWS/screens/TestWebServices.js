import { View, StyleSheet } from 'react-native'
import { Button, Text } from '@rneui/base'
import {getAllpostsService, createPostDervice,updatePostService,getByUserIdService,getProducto,postProducto,putProducto,getDocumentTypes} from '../services/TestServices'


export const TestWebServices = () => {
  //FUNSIONES
  const getAllPost=()=>{
    getAllpostsService();
  }
  //---------------------------
  const createPost=()=>{
    createPostDervice();
  }
  //---------------------------
  const updatePost=()=>{
    updatePostService();
  }
  //---------------------------
  const getByUserId =()=>{
    getByUserIdService();
  }
  //---------------------------
  const getProductoP =()=>{
    getProducto();
  }
  //---------------------------
  const postProductoP =()=>{
    postProducto();
  }
  //---------------------------
  const putProductop=()=>{
    putProducto();
  }
//-----------------------------
const getDocumenTypePost=()=>{
 getDocumentTypes();
}
  return <View style={styles.container}>
    <Text style={styles.textContainer}>MODULO 3</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Recuperar Posts"
        onPress={getAllPost}
      />
      <Button
        title="Crear Post"
        onPress={createPost}
      />
        <Button
        title="Update Post"
        onPress={updatePost}
      />
        <Button
        title="Filtrar"
        onPress={getByUserId}
      />
          <Button
        title="XXX"
        onPress={getProductoP}
      />

      <Button
        title="YYY"
        onPress={postProductoP}
      />

      <Button
        title="ZZZ"
        onPress={putProductop}
      />
      <Button
        title="Tipos de Documentos"
        onPress={getDocumenTypePost}
      />
      
    </View>
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10
  },
  buttonContainer: {
    flex: 6,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginHorizontal:10

  }
});