const arreglo = ['Texto', 423.3,false,{propeidad: 'valor'},[1,2,3]];
console.log(arreglo);


const amigos =  ['Alejandro','Fernando','Pedro'];

//Para seleccionar los nombres necesito los indice
console.log(amigos[0]);

const coloresFavoritos = [];

coloresFavoritos[0]= 'Rojo';
coloresFavoritos[1]= 'Verde';
coloresFavoritos[3]= 'Amarillo';

//Cuantos elementos tengo
console.log('El arreglo colores tiene: '+coloresFavoritos.length + ' colores');

//Para poner un valor al final
coloresFavoritos.push('azul');
console.log(coloresFavoritos);