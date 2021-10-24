/*

switch(expresão){
    case1 valor1:
        break;
    caseN:
        Break

    default:
        break
}

*/


const fruit = 'maca'

switch (fruit) {
    case 'banana':
        console.log('O valor do kg é R$:10.00')
        break;
    case 'maca':
    case 'pera':
    case 'mamao':
        console.log('O valor do kg é R$:12.00')
        break;

    default:
        console.log('Fruta não encontrada')
        break;
}