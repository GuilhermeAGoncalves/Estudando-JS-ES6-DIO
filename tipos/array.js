const user = ['Guilherme','Ginaldo','Fabiana']

const gender = {
    MAN : Symbol('M'),
    WOMAN : Symbol('W')
}

const persons = [
    {
        name: 'Guilherme De Araújo',
        age: 19,
        gender : gender.MAN,
        sons : 0
    },
    {
        name:'Ginaldo Da Nóbrega',
        age: 45,
        gender : gender.MAN,
        sons : 3
    },
    {
        name:'Nicolly Da Silva',
        age:39,
        gender: gender.WOMAN,
        sons: 0
    }
];

//retornar a quantidade de objetos no array
console.log('\n Itens:', persons.length)

//Verificar se a variavel é um array
console.log('\n A variavel persons é um array?', Array.isArray(persons))

//Iterar os itens do array
persons.forEach((person, index, arr) => {
    console.log(`\n nome: ${person.name} \n index: ${index} \n ` )
})

//filtrar um array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log("\nOs homens são",mens)

const womans = persons.filter(person => person.gender === gender.WOMAN)
console.log("\nAs mulheres são",womans)

//Retornar um novo array
const personsWithCourse = persons.map(person =>{
    person.course = 'Introdução a ES6'
    return person
})

console.log('\nPessoas com adição de curso', personsWithCourse)

//Transformar um array em outro

const totalAge = persons.reduce((age, person) =>{
    age += person.age
    return age
},0)

console.log('\n Total de idades das pessoas', totalAge)

const totalSons = persons.reduce((sons, person) => {
    sons += person.sons
    return sons
},0)

console.log('\n Total de filhos:',totalSons)

//juntando operações
const courseForMen = persons.filter(person => person.gender === gender.MAN)
                            .map(person =>{
                                person.course = 'Introdução a react'
                                return person
                            })

console.log("\n Os homens ganham curso de react",courseForMen)
