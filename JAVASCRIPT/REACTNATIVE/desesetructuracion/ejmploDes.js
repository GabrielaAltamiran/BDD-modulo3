recuperar=()=>{
    let frutas=["pera","manzana","sandia" ];
    frutas.push("banana");
    return frutas;
}
testRecuperar=()=>{
    let misFrutas = recuperar();
    let frutaPrimera=misFrutas[0];
    let otraFuta=misFrutas[1];
    console.log("FRUTA PRIMERA: "+frutaPrimera);
    console.log("OTRA FRUTA: "+otraFuta);
}
testRecuperarDes=()=>{
    //[] DEFINO UN ARREGLO DE VARIABLES
    let [frutaPrimera,otrafruta,frutaTercera] = recuperar();
    console.log("1>>>>>>>>>: "+frutaPrimera);
    console.log("2>>>>>>>>>: "+otrafruta);
    console.log("3>>>>>>>>>: "+frutaTercera);
}