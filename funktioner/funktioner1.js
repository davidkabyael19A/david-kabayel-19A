let namn = "david"


function sayhello(){
    let alder = 16
console.log(`hej ${namn}, du är ${alder} år gammal`)

}

sayhello()
sayhello()


function addera(tal1, tal2){
    let summa = tal1+tal2
    return summa
}

console.log(`2+5=${addera(2,5)}`)

function subtrahera (tal1, tal2){
let summa = tal1-tal2
return summa
}

console.log(`2-5=${subtrahera(2,5)}`)


function multiplera (tal1, tal2){
let summa = tal1*tal2
return summa
}

console.log(`2*5=${multiplera(2,5)}`)


function dividera (tal1, tal2){
    let kvot = tal1/tal2
    if (tal2 == 0){ 
        return " får ej dela med 0"
     }
        return kvot
    
}
console.log(`0/5=${dividera(5,0)}`)