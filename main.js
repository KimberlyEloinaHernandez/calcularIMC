var PESO=0
var Estatura1=0
var IMC=0
function peso(){
    PESO=prompt("Ingresa tu peso en kg:")
}
function estatura(){
    Estatura2=prompt("Ingresa tu estatura en metros:")
}
function imc(){
    IMC=PESO/(Estatura2 * Estatura2)
    alert("Tu imc es : "+IMC)

    if (IMC < 18.5){
        alert("-Estas muy delgado-")
    }
    else if (IMC < 25){
        alert("-Estas saludable-")
    }
    else{
        alert("TIENES SOBREPESO!!!")
    }
}