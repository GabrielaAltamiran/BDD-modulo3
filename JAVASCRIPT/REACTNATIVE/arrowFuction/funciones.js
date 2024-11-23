ejecutarSumar=()=>{
    let valor1 = recuperarEntero("txtValor1");
    let valor2 = recuperarEntero("txtValor2");
    let resultadoDeLaSuma
    console.log("Valor 1: "+" "+valor1+" "+"Valor 2: "+" "+valor2)
    resultadoDeLaSuma=sumar(valor1,valor2);
    console.log(resultadoDeLaSuma);
}
//Funion sumar que recibe dos parametros y retorna su suma
sumar=(num1,num2)=>{
    let suma;
    suma=num1+num2;
    return suma;
}
ejecutarResta=()=>{
    let valor1 = recuperarFloat("txtValor1");
    let valor2 = recuperarFloat("txtValor2");
    let resultadoResta;
    console.log("Valor 1:"+" "+valor1+" "+"Valor 2:"+" "+valor2)
    resultadoResta=resta(valor1, valor2);
    console.log(resultadoResta)


}
resta=(num1,num2)=>{
    let resta;
    resta=num1-num2;
    return resta;
}
