function fn(){
    return 'code hereee';
}

const arrowFn1 = () => 'code here';

const arrowFn2 = () => {
    //Quando tem mais de uma expressão
    return 'code here';
}

/*console.log(fn())
console.log(arrowFn1())
console.log(arrowFn2())
*/

//funcitions e array também são objetos
fn.prop = 'Eu posso criar propriedades!'

console.log(fn())
console.log(fn.prop)

//receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn)


