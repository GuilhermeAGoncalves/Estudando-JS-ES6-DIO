const symbol1 = Symbol('name')
const symbol2 = Symbol('name')

//symbols são unicos
console.log('\nsymbol1 é igual a symbol2?', symbol1 === symbol2)

//previnir conflitos entre nome de propriedades
const nameSymbol1 = Symbol('name')
const nameSymbol2 = Symbol('name')

const user = {
    fullName: 'Guilherme De Araújo',
    [nameSymbol1]: 'Guilherme',
    [nameSymbol2]: 'Araújo',
    age: 19
}

console.log(user)

//Symbols criam propriedades que não são enumerable
for(const key in user){
    if(user.hasOwnProperty(key)){
        console.log(`\nValor da chave ${key}: ${user[key]}`)
    }
}
console.log('\nPropriedades do objeto user:',Object.keys(user))
console.log('\nValores do objeto user:',Object.values(user))

//Exibir symbols de um objeto
console.log('\nSymbols registrados no objeto user:', Object.getOwnPropertySymbols(user)) 

//Para acessar todas as propriedades do objeto
console.log('\nTodas as propriedades do objeto user:', Reflect.ownKeys(user))

//criar um enum
const directions = {
    UP   : Symbol('UP'),
    LEFT : Symbol('LEFT'),
    DOWN : Symbol('DOWN'),
    RIGHT: Symbol('RiGHT')
}