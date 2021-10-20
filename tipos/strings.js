const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`)


// Vai quebrar o texto pelo delimitador e retornar um array
const splitedText = 'Texto'.split('x')
console.log('\nArray separado por um delimitador' , splitedText)

// Vai buscar o valor no texto e substituir por outro
const replacedText  = 'Texto'.replace("Text", "Sex")
console.log("\nSubstituição de valor", replacedText)

//Retornar um fatia do valor
const lastChar = 'Texto'.slice(-1)  //-1 retorna a ultima letra
console.log("\nUltimo letra do texto",lastChar)

const allWhithoutLastChar = 'Texto'.slice(0, -1)
console.log('\nValor da string da primeira letra menos a ultima', allWhithoutLastChar)

const secondToEnd = 'Texto'.slice(1)
console.log('\nValor da string da segunda letra até a ultima', secondToEnd)


//Retorna N caracteres a partir de uma posição
const twoCharBeforeFistPos = 'Texto'.substr(0, 2)
console.log('\nAs duas primeiras letras são', twoCharBeforeFistPos)