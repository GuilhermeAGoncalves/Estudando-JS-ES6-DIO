let user = {
    name: 'Guilherme'
}
//console.log(user.name)
//Alterando propriedades de um objeto
user.name = 'Jonas'
//console.log(user.name)

user['name'] = 'Chico'
//console.log(user.name)

const prop = 'name'
user[prop] = 'Douglas'
//console.log(user.name)


//Criando nova propriedade
user.lastName = "Araújo Gonçalves"
console.log(user)

//Deletando um propriedade
delete user.name
console.log(user)
