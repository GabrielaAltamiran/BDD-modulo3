import { View, StyleSheet, Alert } from "react-native";
import { Button, Input, Text } from "@rneui/base";
import { useState } from "react";
import {
  createPostDervice,
  createTipoDocumento,
} from "../services/TestServices";
export const PostForm = () => {
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [subject2, setSubject2] = useState();
  const [message2, setMessage2] = useState();

  const createPost = () => {
    console.log("creando post " + subject + " " + message);
    createPostDervice(
      {
        title: subject,
        body: message,
      },
      () => {
        Alert.alert("COMFIRMACIÓN ", "Se ha ingresado un nuvo POST");
      }
    );
  };
  const insertarTD = () => {
    console.log("Insertando datos " + subject2 + " " + message2);
    createTipoDocumento(
      {
        codigo: subject2,
        descripccion: message2,
      },
      () => {
      }
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text h4="true">NUEVO MENSAJE</Text>
      </View>
      <View style={styles.formContainer}>
        <Input
          placeholder="TITULO"
          value={subject}
          onChangeText={(value) => {
            setSubject(value);
          }}
        />
        <Input
          placeholder="MENSAJE"
          value={message}
          onChangeText={(value) => {
            setMessage(value);
          }}
        />
        <Input
          placeholder="INGRESE TIPO DE DOCUMENTO"
          value={subject2}
          onChangeText={(value) => {
            setSubject2(value);
          }}
        />
        <Input
          placeholder="DESCRIPCÓN DEL TIPO DE DOCUMENTO"
          marginVertical
          value={message2}
          onChangeText={(value) => {
            setMessage2(value);
          }}
        />

        <View style={styles.buttonContainer}>
          <Button title="Guardar" onPress={createPost} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Tipo Documento" onPress={insertarTD} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  formContainer: {
    flex: 7,
    flexDirection: "column",
    justifyContent: "center",
  },
  // Contenedor para los botones con margen
  buttonContainer: {
    marginBottom: 20, // Espacio entre los botones
  },
});
