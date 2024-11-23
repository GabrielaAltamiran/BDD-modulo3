
/*ESTA FUNCIONES NOS VA AYUDAR PARA EJECUTAR CUALQUIERA DE LAS DOS DE SUMAR O RETAR
RECUPERA VALORES CON EN LA FUNCIONES SEPARADAS DE SUMA Y RETA
PASAMOS UNA FUNCION COMO PARAMETRO
Y ESA FUNCION RECIBE DOS PARAMETROS*/
ejecutarOperacion=(operar)=>{
    let valor1 = recuperarEntero("txtValor1");
    let valor2 = recuperarEntero("txtValor2");
    let resultado;
    resultado=operar(valor1,valor2);
    console.log(resultado);
}

//Funion sumar que recibe dos parametros y retorna su suma
sumar=(num1,num2)=>{
    let suma;
    suma=num1+num2;
    return suma;
}


resta=(num1,num2)=>{
    let resta;
    resta=num1-num2;
    return resta;
}
ejecutar=(fn)=>{
    console.log("ESTOY EJECUTANDO FUNCIONES")
    //VA A EJECUTAR LA FUNCION QUE SE LE HAYA PASADO
    fn();
}
//NO RECIBE Y NO RETORNA
//SOLO DA UN MENSAJE EN CONSOLA
imprimir=()=>{
    console.log("ESTOY IMPRIMIENDO")
}
//NO RECIBE PARAMETROS 
//SOLO NO DA UN ALERT
saludar=()=>{
    alert("APRENDIENDO PROGRAMACION FUNCIONAL")
}

testEjecutar=()=>{
    /*SE INVOCA A EJECUTAR
    QUE A SU VEZ LLAMA A LA FUNCION IMPRIMIR COMO PARAMETRO
    TAMBIEN A LA FUNCION SALUDAR*/
    ejecutar(imprimir);
    ejecutar(saludar);
    /*AQUI ESTAMOS DETERMINADO UNA FUNCION DENTRO DEL PARENTECIS
    QUIERE DECIR QUE ESTAMOS CREADONDO UNA FUNCION DENTRO DEL PARENTESIS
    NO ES NECESARIO CREAR UNA FUNCION 
    ES VALIDO AHCERLO DE ESA MANERA
    SON FUNCIONES CONOCIDAS COMO ANONIMAS*/
    ejecutar(()=>{
        alert("SOY UNA FUNCIÓN ANONIMA")
    });
}