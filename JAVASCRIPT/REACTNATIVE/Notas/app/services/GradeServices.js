let grades = [
  { subject: " Matemáticas", grade: 9.5 },
  { subject: " Fisíca", grade: 10 },
];
export const saveGrade = (grade) => {
  grades.push(grade); //Se esta agreado a al arreglo
  console.log("Arreglo", grades);
};
//FUNSION PARA OBTENER EL ARREGLO
export const getGrades = () => {
  return grades;
};
