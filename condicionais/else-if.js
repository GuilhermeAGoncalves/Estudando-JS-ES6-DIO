/*

if(condition){
    code
}
else if(condition){
    code
}
*/

const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.forEach(item => {
    if(item % 2 === 0){
        console.log(`O numero ${item} é divisivel por 2`)
    }
    else if(item % 3 === 0){
        console.log(`O numero ${item} é divisivel por 3 `)
    }
    else{
        console.log(`O numero ${item} é primo`)
    }
})

const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.forEach(item => {
    if(item % 2 === 0){
        console.log(`O numero ${item} é divisivel por 2`)
    }
    if(item % 3 === 0){
        console.log(`O numero ${item} é divisivel por 3 `)
    }
    if(item % 5 === 0){
        console.log(`O numero ${item} é divisivel por 5`)
    }
})