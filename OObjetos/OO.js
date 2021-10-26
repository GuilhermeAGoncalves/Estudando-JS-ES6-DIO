'use strict';

const myText = String('Hello Prototipe');

console.log(myText.__proto__.split === String.prototype.split);

console.log(myText.constructor === String)

function Pessoa(name){
    this.name = name;
}

const accesso1 = new Pessoa('Guilherme')
const accesso2 = new Pessoa('Gustavo')

console.log(accesso1)
console.log(accesso2, accesso1)

function animal (qtdPatas){
    this.qtdPatas = qtdPatas
}

function cachorro (morde){
    animal.call(this, 4)

    this.morde = morde
}

const pitbull = new cachorro(false)
console.log(pitbull)

function Animal(qtdPatas){

    Animal.prototype.qtdPatas = 0
    Animal.prototype.mover = function(){}

}

function Cachorro(morder){
    this.qtdPatas = 4
    this.morder = morder

    Cachorro.prototype = Object.create(Animal)
    Cachorro.prototype.latir = function(){
        console.log('Au! Au!')
    }

}

const pug = new Cachorro(false)
const pitbull = new Cachorro(true)

console.log(pug)
console.log(pitbull)

'123456'.split('')