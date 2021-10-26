class Observer {
    constructor(){
        this.observables = []
    }

    subscribe(fn){
        this.observables.push(fn)
    }

    unsubscribe(fn){
        this.observables = this.observables.filter(obs => obs !== fn)
    }

    notify(data){
        this.observables.forEach(fn => fn(data))
    }
}

const o = new Observer()

const logData1 = data => console.log(`Subscriber 1: ${data}`)
const logData2 = data => console.log(`Subscriber 2: ${data}`)
const logData3 = data => console.log(`Subscriber 3: ${data}`)

o.subscribe(logData1)
o.subscribe(logData2)
o.subscribe(logData3)

o.notify('Notified 1')
console.log(o.observables)

o.unsubscribe(logData2)

o.notify('Notified 2')
console.log(o.observables)