import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "@rneui/base";
import { saveGrade } from "../services/GradeServices"; //Asi se realiza cuando el archivo esta en otra carpeta
import { FAB } from "@rneui/base";

export const GradeForm = ({ navigation, route }) => {
  //Validacion para saber si es nuevo o es para editar
  let isNew = true;
  let subjectR;
  let gradeR;

  if (route.params.notita != null) {
    isNew = false;//Si no es nuevo
  }
  if (!isNew ) {
    subjectR=route.params.notita.subject;
    gradeR=route.params.notita.grade;
  }
  //---------------------------------------
  const [subject, setSubject] = useState(subjectR);
  const [grade, setGrade] = useState(gradeR);
  const [errorSubject, setErrorSubjacte] = useState();
  const [errorGrade, setErrorGrade] = useState();
  const hasError = false;

  //FUNCION PARA GAURDAR
  const save = () => {
    setErrorGrade(null); //Borrar el error y quedaria limpio
    setErrorSubjacte(null);
    validate();
    if (!hasError) {
      //Si no hay errores, guardar
      saveGrade({ subject: subject, grade: grade });
      navigation.goBack("ListGradeNav"); //VOLVER A LA PANTALLA ANTERIOR
    }
  };
  //FUNSION PARA VALIDAR
  const validate = () => {
    if (subject == null || subject == "") {
      setErrorSubjacte("Debe ingresar una materia");
      hasError = true;
    }
    let gradeFloat = parseFloat(grade);
    if (
      gradeFloat == null ||
      isNaN(gradeFloat) ||
      gradeFloat < 0 ||
      gradeFloat > 10
    ) {
      setErrorGrade("Debe ingresar una nota entre 0 y 10");
      hasError = true;
    }
  };
  return (
    <View style={styles.container}>
      <Input
        value={subject}
        onChangeText={setSubject}
        placeholder="EJEMPLO: Matemáticas"
        label="Materia"
        errorMessage={errorSubject}
        // errorMessage="Error Fijo" /*se puede cambiar el mensaje, tambien sirve para validar y mostar un mensaje de error*/
      />
      <Input
        value={grade}
        onChangeText={setGrade}
        placeholder="0-10"
        label="Nota"
        errorMessage={errorGrade}
      />
      <Button
        title="Guardar"
        icon={{
          name: "save",
          type: "font-awesome",
          color: "black",
        }}
        buttonStyle={styles.saveButton} //estilos de botton
        onPress={save}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  saveButton: {
    backgroundColor: "burlywood",
  },
});
