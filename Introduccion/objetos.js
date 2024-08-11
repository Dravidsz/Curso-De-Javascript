const PersonaArrelgo = ['nombre', 24, 'correo@gmail.com',true,true];

//objetos considero que se parec bastante a las clases de java.

const persona={
    //Primero la propiedad y depues su valor
    nombre: 'Carlos',
    edad: 26,
    gmail: 'correo@correo.com',
    //Para añadir categorias
    suscripciones: {
        web: true,
        correo: true
    },
    //Arreglo dentor de un objetos
    coloresFavoritos:['Negro','Rojo'],
    saludo: function(){
        alert('Hola Desde el objeto');
    }

};

//Para acceder a las propiedad
console.log(persona.nombre);
console.log(persona['edad']);

//Para acceder a la variable del correo
//const variable = 'gmail';
//console.log(persona[variable]);

const variable = 'suscripciones';
console.log(persona.suscripciones.correo);

//Para agregar nuevos valores al obejtos
persona.pais = 'Panamá';
persona.pais = 'Chiriqui';

console.log(persona.pais);
persona.saludo();