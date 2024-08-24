/*
Global Scope
-son las variables declaradas fuera de la funcion
-podemos accedera a ellas desde cualquier parte del codigo
-podemos usar  const, let y var
*/

 var nombre = 'Carlos';

 console.log(nombre);


 //modificaciones dentro de las función para la variables de nombre
 const saludo = () => {
    nombre = 'Arturo';
    console.log(`Hola ${nombre}`);

 };

 saludo();

