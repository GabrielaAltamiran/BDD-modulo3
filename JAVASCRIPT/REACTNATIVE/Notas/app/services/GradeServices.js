let grades = [
  { subject: " Matemáticas", grade: 9.5 },
  { subject: " Fisíca", grade: 10 },
];
export const saveGrade = (grade) => {
  grades.push(grade); //Se esta agreado a al arreglo
  //console.log("Arreglo", grades);
};
//FUNSION PARA OBTENER EL ARREGLO
export const getGrades = () => {
  return grades;
};
export const updateGrade = (nota) => {
    console.log("Actualizando con los siguientes datos:", nota);  // Agregar este log para depurar
    let gradeRetriver = find(nota.subject);
    if (gradeRetriver != null) {
      gradeRetriver.grade = nota.grade; // Se actualiza el valor de la nota
      console.log("Nota actualizada:", gradeRetriver);
    }
    console.log("Arreglo actualizado:", grades);
  };
//FUNSION PARA BUSCAR UN ELEMNTO DENTRO DEL ARREGLO
export const find = (subject) => {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].subject == subject) {
      return grades[i]; // Devuelve el primer elemnto que coincida con la busquedad
    }
  }
  return null; //SI NO ENCUNTRA EL ELEMNTO RETORNA NULL
};
