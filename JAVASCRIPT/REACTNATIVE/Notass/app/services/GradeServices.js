let grades = [
  { subject: "Matemáticas", grade: "9.45" },
  { subject: "Fisíca", grade: "10" },
];
export const saveGrade = (grade) => {
  grades.push(grade);
  //console.log(grades);
};
export const getGrades = () => {
  return grades;
};
export const updateGrade = (nota) => {
  let gradeIndex = grades.findIndex((g) => g.subject === nota.subject); // Es para  buscar el indice de la nota 
  if (gradeIndex !== -1) { // Si el indice no es un -1 es por que se encontro la nota
    // Crear una copia de la nota existente
    grades[gradeIndex] = { ...grades[gradeIndex], grade: nota.grade }; // actualiza la nota
  }
};
