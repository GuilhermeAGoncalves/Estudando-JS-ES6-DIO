const myNumber = 12.0219;

//Transformar numero em string
const numberAssString = myNumber.toString();
console.log('\nNúmero transformado em String ', typeof numberAssString);

//Retornar um numero com a quantidade de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2)
console.log('\nNúmero com duas casas decimais', fixedTwoDecimals)

//Transfomar uma string em float
console.log('\nString para numemro float', parseFloat("13.02"))

//Transformar uma string em int
console.log('\nString para numero int', parseInt("12.09"))

