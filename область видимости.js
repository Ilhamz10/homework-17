let a
let b
function myfn() {
    let b
    a = true
    b = 10
    console.log(b)//10   
}

myfn()
console.log(a)//true
console.log(b)//undefined