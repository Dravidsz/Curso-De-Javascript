//Estructura de condicionales
//Ejemolo #1
/*const usuario={
    edad: 20,
    pais: 'Panamá',
    ticket: false
}

if(usuario.edad>17){
    console.log('El usuarioes mayor de edad, y puede entrar al concierto');
} else{
    console.log('El usuario es menor de edad y no puede entrar');
}
*/

//Ejemplo #2
/*
if(usuario.edad >= 18 && usuario.ticket){
    console.log('Tiene ticket y es mayor edad');
} else if(usuario.edad <=18){
    console.log('El usuario no es mayo de edad o no tiene ticket')
}else{
    console.log('No tiene ninguno de los dos'); 
}

const usuario={
    edad: 15,
    pais: 'Panamá',
    ticket: true,
};

if(usuario.edad >= 18){
    if(usuario.ticket){
        console.log('El usuario es mayor de edad y tiene un ticket');
    }else{
        console.log('El usuario es mayor de edad pero no tiene ticket');
    }
}else{
    console.log('El usuario es menor de edad');
};
*/

const usuario={
    edad: 15,
    pais: 'Colombi',
    ticket: true,
};


const usuario1={
    nombre: 'Hector Ortega',
    edad: 25,
    corrreo: 'correo@correo.com',
    suscripcion: true
}

if(usuario.pais=='Panama'){
    console.log('El usuario es Panameño');
}else if(usuario.pais == 'Mexico'){
    console.log('El usuario es de mexicano');
}else if(usuario.pais == 'Colombia'){
    console.log('El usuario es colombiano');
}else{
    console.log('No sabemos de donde dianche es este men');
}
