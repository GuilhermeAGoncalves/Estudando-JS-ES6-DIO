function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance = this
    }

    return Pessoa.instance
}

const p = Pessoa.call({name: 'Guilherme'})

const p2 = Pessoa.call({name: 'cunstom name'}) //log = 'Guilherme'

console.log(p)

console.log(p2)