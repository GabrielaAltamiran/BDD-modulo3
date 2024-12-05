import { View, StyleSheet, Text } from "react-native";
import {} from "@rneui/base";
import { Input, Button } from "react-native-elements";
import { useState } from "react";
import { saveGrade, updateGrade } from "../services/GradeServices";

//----------------------------------------
export const GradeFrom = ({ navigation, route }) => {
  //--------------------ROUTE----------------------
  let isNew = true;
  let subjectR;
  let gradeR;

  if (route.params.notita != null) {
    isNew = false;
  }

  if (!isNew) {
    subjectR = route.params.notita.subject;
    gradeR = route.params.notita.grade;
  }

  console.log("notita", route.params.notita);
  //------------VARIABLES DE ESTADO----------------
  const [subject, setSubject] = useState(subjectR);
  const [grade, setGrade] = useState(gradeR == null ? null : gradeR + "");
  const [errorSubject, setErrorSubject] = useState();
  const [errorGrade, setErrorGrade] = useState();
  let hasError = false;

  //------------------GUARDAR----------------------
  const save = () => {
    setErrorSubject(null);
    setErrorGrade(null);
    validate();
    if (!hasError) {
        if(isNew){
            saveGrade({ subject: subject, grade: grade });

        }else{
            updateGrade({subject : subject, grade : grade})
        }
      // Si no hay errores
  
      navigation.goBack();
      route.params.refre();
    }
  };
  //------------------VALIDAR----------------------
  const validate = () => {
    if (subject == null || subject == "") {
      setErrorSubject("Debe ingresar una materia");
      hasError = true;
    }
    let gradeFloat = parseFloat(grade);
    if (
      gradeFloat == null ||
      isNaN(gradeFloat) ||
      gradeFloat < 0 ||
      gradeFloat > 10
    ) {
      setErrorGrade("Debe ingresar una nota 0-10");
      hasError = true;
    }
  };

  //----------------------------------------
  return (
    <View style={styles.container}>
      <Input //----------------------MATERIA------------
        value={subject}
        onChangeText={setSubject}
        placeholder="Ejemplo : Matemáticas"
        label="Materia"
        errorMessage={errorSubject}
        disabled={!isNew}

      />
      <Input //----------------------NOTA----------------
        value={grade}
        onChangeText={setGrade}
        placeholder="0-10"
        label="Nota"
        errorMessage={errorGrade}
      />
      <Button //--------------------BOTTON GUARDAR------------
        title="Guardar"
        
        icon={{
          name: "save",
          type: "font-awesome",
          color: "#000000",
        }}
        buttonStyle={styles.buttonSave}
        onPress={save}
      />
    </View>
  );
};
//----------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSave: {
    backgroundColor: "#32cd32",
    borderRadius: 8,
  },
});
