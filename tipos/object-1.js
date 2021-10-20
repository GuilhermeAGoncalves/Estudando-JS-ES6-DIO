let user = {
    name: 'Guilherme',
    lastName: 'Araújo Gonçalves'
}

//Retornar as chaves do objeto
console.log('\nAs chaves do objetos sao', Object.keys(user))

//Retornas os valres do objeto
console.log('\nOs valores presentes sao', Object.values(user))

//Retorna um array de arrays contendo [NomeProp, ValorProp]
console.log('\nLista de propriedades e valores:', Object.entries(user))

//Mesclar propriedades de objetos
Object.assign(user,{fullName: 'Guilherme De Araújo Gonçalves'})

console.log('\nAdicionar propriedade Full-Name ao user', user)
console.log('\nRetorna um objeto mergenando um ou mais objetos', Object.assign({},user,{age: 29}))

//Previnir mudanças no objeto
const newObj = {tecnologia: 'JS'}
Object.freeze(newObj)
delete newObj.tecnologia
newObj.js = 'tecnologia'
newObj.java = 'nova tecnologia' //freeze on não tem como mudar nada no objeto

console.log('\nVariavel newObj após alteração', newObj)

//Permite apenas alterações em propriedades existentes
const person = {name: 'Guilherme'}
Object.seal(person)

delete person.name //Não deleta
person.name = 'Jonas'
person.lastName = 'Araújo' //Nem adiciona

console.log('\nVariavel person após alterações', person)