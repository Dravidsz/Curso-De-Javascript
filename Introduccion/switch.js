const usuario ={
    nombre: 'Hector',
    pais: 'Peru'
};

switch(usuario.pais){
    case 'Mexico': {
        console.log('El usuario es Mexicano');
        break;
    }

    case 'Panama': {
        console.log('El usuario es de Panamá');
        break;
    }

    case 'Argentina': {
        console.log('El usuario es de argentina');
        break;
    }

    default:
        console.log('El usuario es de otro pais');
        
}