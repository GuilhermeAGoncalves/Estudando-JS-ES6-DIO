//criando arrays

const arr = [1,2,3,4]
const arr2 = new Array(1,2,3,4,5,6,7)
const arr3 = Array.of('Guilherme','Araujo','Goncalves')
const arr4 = Array(3) //Vai criar um array com N posições vazias
const arr5 = Array(3,4,5,6,8)

//const divs = document.querySelectorAll('div') //pegar todas as divs e faz uma node list
//const arr6 = Array.from(divs) //pega a node list e transforma em um array podendo fazer oq queiser como um array ex: shift, pop

const frutas = ['maça','banana']
const pushFrutas = frutas.push('pera') //adiciona um item no final do array || log = 3
const popFrutas = frutas.pop() //Remove o ultimo elemento || log = 'pera'

const carros = ['marea','uno']
const unshiftCarro = carros.unshift('palio') //adiciona um intem no inicio do array || log = 3
const shiftCarrp = carros.shift() //Remove um item no inicio do array || log = 'palio'

const salgados = ['coxinha','pastel']
const alimentos = frutas.concat(salgados) // faz a concatenação entre frutas e salgados

const arr6 = [1,2,4,5,6]
const slice1 = arr6.slice(0,2) //pegar os items do indice 0 até o indice 2 ||log = [ 1, 2 ]
const slice2 = arr6.slice(2) // pegar os items a partir do indice 2 ||log = [ 4, 5, 6 ]
const slice3 = arr6.slice(-1) //pegar o ultimo item ||log = [ 6 ]
const slice4 = arr6.slice(-3) //pegar os 3 ultimos items || log = [ 4, 5, 6 ]

const arr7 = [1,2,3,4,5,6]
const splice1 = arr7.splice(2) //remove todos os items a partir do indice 2 || log = [ 3, 4, 5, 6 ]
const splice2 = arr7.splice(0,0,'teste') //estou pegando o indice 0, removendo 0 items e adicionando a string('teste')
const splice3 = arr7.splice(0,1,'teste removido')//estou pegando o indice 0, removendo 1 item e adicionando a string('teste removido')

const alimentosForEach = alimentos.forEach((alimento, posicao) => {
    //console.log(posicao, alimento)
}) //apenas itera os elementos

const frutasMap = frutas.map((fruta, index) => `${index} - ${fruta}`)

const idades = [19,20,21,[40,41,42,[53,60,76]]]
const idadesFlat = idades.flat(2) //deixar os array no mesmo nivel

const arr8 = [1,2,3,4,5,6]
const arrFlatMap = arr8.flatMap(value => ([value * 2])) //vai fazer o map e depois  flat
const arrFlatMap2 = arr8.flatMap(value => ([[value * 2]])) //vai fazer o map e depois  flat sendo aqui || log = [ [ 2 ], [ 4 ], [ 6 ], [ 8 ], [ 10 ], [ 12 ] ]

const firstGreaterThanTwo = arr8.find(value => (value > 2)) //procurar o primeiro item maior que 2   || log = 3
const firstGreaterThanTwo2 = arr8.findIndex(value => (value > 2)) //procurar o index do primeiro item que é maior que 2 || log = 2
const allGreaterThanTwo = arr8.filter(value => (value > 2))// Retornar um array com todos os valores que são maior que 2 || log = [ 3, 4, 5, 6 ]

const hasItemOne = arr8.includes(1) //vai olhar no array e vê se ta incluido || log = true
const hasItemSeven = arr8.includes(7) //log = false

const hasSomeEvenNumber = arr8.some(value =>(value % 2 === 0)) //retornar um booleano se houver algum valor que satisfaz a condição

//exemplo um pouco mais avançado
//criar um array com alunos e notas e vericar se pelo menos um aluno tem nota maior ou igual a 7 e retornar ele e depois verificar se todos os alunos passaram

const alunos = [
    {nome:'Guilherme', nota: 8},
    {nome:'Jose', nota: 5},
    {nome:'Douglas',nota: 4},
    {nome:'Maria',nota: 9}
]

const verificarAlunoNotaMaior7 = alunos.some(aluno => aluno.nota >= 7) //Verifica se algum aluno passou
const alunoNotaMaior7 = alunos.find(aluno => aluno.nota >= 7) //retorno o aluno que passou
const alunosNotaMaior7 = alunos.filter(aluno => aluno.nota >= 7) //retorna todos os alunos que passo
const todosOsAlunoPassaram = alunos.every(aluno => aluno.nota >= 7) //verifica se todos os alunos passou
const notaMenorParaMaior = alunos.sort((atual, proximo) => atual.nota - proximo.nota)
const notaMaiorParaMenor = alunos.sort((atual, proximo) => proximo.nota - atual.nota)
const somaNotas = alunos.reduce((soma, aluno) => soma += aluno.nota, 0) 
const mediaDosAlunos = alunos.reduce((media, aluno) => media += aluno.nota / alunos.length, 0) //media de todos os alunos

const arr9 = [1,2,3,4,5,6,7]
const reverterArr = arr9.reverse()

const arr10 = [1,2,3,4,5,6,7,8,9,10]
const joinArr = arr10.join('-') //retornar uma string separado por ' - ' 1-2-3-4-5-6-7-8-9-10

const arr11 = [1,2,3,4,5,6,7,8]
const somaTotal = arr11.reduce((total, value) => total += value,0)

console.log(mediaDosAlunos)