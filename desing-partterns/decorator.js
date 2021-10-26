let loggedIn = false

function CallIfAuthenticated(fn){
    return !!loggedIn && fn();
}

function sum(a, b){
    return a + b;
}

function mult(a, b){
    return a * b;
}

console.log(CallIfAuthenticated(() => sum(2,4)))

loggedIn = true
console.log(CallIfAuthenticated(() => sum(2,4)))
console.log(CallIfAuthenticated(() => mult(2,4)))

loggedIn = false
console.log(CallIfAuthenticated(() => sum(2,4)))