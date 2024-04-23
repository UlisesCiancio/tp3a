var numero1=parseInt(prompt("Ingrese un número entero."));
var numero2=parseInt(prompt("Ingrese otro número entero;"));
var suma1=0;
var numerosentre=0;
var prueba=0

if(numero1<numero2){
    numero1=numero1-1;
    while(numero1!=numero2){
        numero1=numero1+1
        numerosentre=numerosentre+1;
        suma1=suma1+numero1;
        console.log(numero1);
}
console.log("La suma es de ",suma1);
console.log("La cantidad de digitos entre los dos numeros es de ",numerosentre);
}else if(numero1>numero2){
    numero2=numero2-1;
    while(numero1!=numero2){
        numero2=numero2+1
        numerosentre=numerosentre+1;
        suma1=suma1+numero2;
        console.log(numero2);
}       
console.log("La suma es de ",suma1);
console.log("La cantidad de digitos entre los dos numeros es de ",numerosentre);
}
