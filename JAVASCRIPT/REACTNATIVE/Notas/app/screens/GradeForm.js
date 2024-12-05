import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "@rneui/base";
import { saveGrade, updateGrade } from "../services/GradeServices";
export const GradeForm = ({ navigation, route }) => {
  //Validacion para saber si es nuevo o es para editar
  let isNew = true;
  let subjectR;
  let gradeR;

  if (route.params.notita != null) {
    isNew = false; //Si no es nuevo
  }
  if (!isNew) {
    subjectR = route.params.notita.subject;
    gradeR = route.params.notita.grade;
  }
  //---------------------------------------
  const [subject, setSubject] = useState(
    subjectR == null ? null : subjectR + ""
  );
  const [grade, setGrade] = useState(gradeR == null ? null : gradeR + ""); //Si es null no se muestra nada
  const [errorSubject, setErrorSubjacte] = useState();
  const [errorGrade, setErrorGrade] = useState();

  hasError = false;
  //FUNCION PARA GAURDAR
  const save = () => {
    setErrorGrade(null); //Borrar el error y quedaria limpio
    setErrorSubjacte(null);

    validate();
    if (!hasError) {
      if (isNew) {
        saveGrade({ subject: subject, grade: grade });
      } else {
        updateGrade({ subject: subject, grade: grade });
      }
      navigation.goBack(); //VOLVER A LA PANTALLA ANTERIOR
      route.params.refre();
    }
  };
  //FUNSION PARA VALIDAR
  const validate = () => {
    if (subject == null || subject === "") {
      setErrorSubjacte("Debe ingresar una materia");
      // Actualizamos el estado de error
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
      hasError = true; // Actualizamos el estado de error
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
        disabled={!isNew} // Si no es nuevo esta desabilitado
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
