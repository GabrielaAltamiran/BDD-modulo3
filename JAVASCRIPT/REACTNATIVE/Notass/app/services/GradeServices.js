let grades = [
  { subject: "Matemáticas", grade: "9.45" },
  { subject: "Fisíca", grade: "10" },
];
export const saveGrade=(grade)=>{
    grades.push(grade);
    //console.log(grades);
}
export const getGrades=()=>{
    return grades;
}
export const updateGrade=(nota)=>{
    let gradeRetrieved = find(nota.subject);
    if(gradeRetrieved!=null){
        gradeRetrieved.grade = nota.grade;
    }
    console.log("Arreglo",grades)


}
const find=(subject)=>{
    for(let i=0;i<grades.length;i++){
        grades[i].subject==subject;
        return grades[i];
    }
    return null;
}