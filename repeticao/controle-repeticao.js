//break
console.log('Exemplo de Break')

let parar = 0

while(true){
    console.log(parar)
    parar++

    if(parar > 10){
        break;
    }
}

//continue

console.log('\nExemplo de continue')

const arr = [1,2,3,4,5,6,7,8,9,10]

for(let index = 0; index < arr.length;index++){
    const element = arr[index]

    if(element % 2 === 0){ //retirar os numeros pares
        continue
    }
    console.log(element)
}
