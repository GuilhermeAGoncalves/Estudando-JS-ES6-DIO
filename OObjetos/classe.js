class Animal{
    constructor(qtdPatas){
        this.qtdPatas = 4
    }
}

class Cachorro extends Animal{
    constructor(morder){
        super(4)
        this.morder = morder
    }
}

const pug = new Cachorro(false)

console.log(pug)


class Animal{
    constructor(){
        this.qtdPatas = 0
    }

    movimentar(){}
}

class Cachorro extends Animal{
    constructor(morder){
        super();
        this.qtdPatas = 4;
        this.morder = morder;
    }

    latir(){
        console.log('Au Au')
    }
}

const pug = new Cachorro(false)
const pincher = new Cachorro(true)


console.log(pug)
console.log(pincher)
pincher.latir();