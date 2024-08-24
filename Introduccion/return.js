const operacion = (tipo, num1 , num2)=>{
    let resultado;
    if(tipo === 'suma'){
        resultado = num1 + num2;
    
    }
    else if(tipo === 'resta'){
        resultado = num1 - num2;
    } 

    return resultado;
};

const miVariable = operacion('suma',7,24);

console.log(miVariable);