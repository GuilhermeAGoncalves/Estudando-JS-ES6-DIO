const arr = [0,2,4,6,8]
arr.tell = '558399'

for(let i in arr){
    console.log(i) //log 0 1 2 3 4 tell
}

for(let o of arr){
    console.log(o) //log 0 2 4 6 8
}