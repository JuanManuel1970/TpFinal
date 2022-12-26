let suma;
let resta, multiplicacion, division
let numeroUno, numeroDos
let resultado = document.getElementById("resultado")


//swal("Bienvenidos a la calculadora hecha con JS!!!");

//function saludar() {
  //  resultado.innerHTML = "Hola usuario";

   

    function iniciar() {
    numeroUno=parseFloat(prompt("Ingrese un numero :"));
    while (isNaN (numeroUno) || numeroUno ==="" )numeroUno=parseFloat(prompt("Debe ingresar un numero :"));
  
       

    numeroDos=parseFloat(prompt("Ingrese otro numero :"))
    while (isNaN (numeroDos) || numeroDos ==="" )numeroDos=parseFloat(prompt("Debe ingresar otro numero :"));
    
  
}








function sumar()  {
        suma = numeroUno + numeroDos;
        resultado.innerHTML= `El resultado de la suma es: ` + suma; 
         }
    



function restar() {resta = numeroUno - numeroDos; 
    
    
resultado.innerHTML= `El resultado de la resta es  :  ` + resta 

}

function multiplicar() { multiplicacion = numeroUno * numeroDos; 
   
resultado.innerHTML= `El resultado de la multiplicacion es  :  ` + multiplicacion;

}E
function dividir() { division = numeroUno / numeroDos; 
   
resultado.innerHTML= `El resultado de la division es  :  ` + division;
    
}
