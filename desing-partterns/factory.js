function FakeUser() {
    this.name = 'Guilherme'
    this.lastName = 'Araújo'
}

const user = new FakeUser() //Não é factory pq tem new

console.log(user)


function FakeUser(){
    return{
        name: 'Guilherme',
        lastName: 'Araújo'
    }
}

const user = FakeUser() //factory(fabrica)
console.log(user)

function FakeUser(name){
    return{
        name,
        lastName: 'Araújo'
    }
}

const user = FakeUser('Custum name') //factory(fabrica)
console.log(user)

function FakeUser(custumProperties){
    return{
        name: 'Guilherme',
        lastName: 'Araújo',
        ...custumProperties
    }
}

const user = FakeUser({name:'Custum name', age:20}) //factory(fabrica)
console.log(user)