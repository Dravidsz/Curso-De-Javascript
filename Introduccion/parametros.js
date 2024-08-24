/*Parametros es el campo
el argumento es el valor de parametro */

const saludar = (nombre) =>{
    console.log(`hola ${nombre}`);
};

saludar('Carlos');
saludar('Jorge');

/*
multiples parametros
*/

const operacion = (numero1, numero2)=>
{
    console.log(numero1 + numero2)
};

const resta= (num1, num2)=>{
    console.log(num1 - num2)
}

operacion(2 , 5 );
resta(5,2);