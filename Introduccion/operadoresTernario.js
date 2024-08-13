const boleto = 'vip';
//let codigoDeAcceso;
/*
if(boleto == 'vip'){
    codigoDeAcceso = 'VIP-387-3133';
}else{
    codigoDeAcceso = 'REGULAR-3293-2342';
}
*/
//Operador ternario
const codigoDeAcceso = (boleto === 'vip')?'VIP-323-323': 'REGULAR-233-233';
console.log(codigoDeAcceso);

boleto === 'vip'? console.log('Tu boleto es VIP'): console.log('Tu boleto es regular');s
