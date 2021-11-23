// stack of calls

function f1(name) {
    setTimeout(function (){
        console.log(name + " -> Zarina")
        name = "Zarina"
    }, 2000)
    return function (age) {
        console.log(name, age)
    }
}

var f11 = f1("Baki")

f11(33)

setTimeout(function (){
    f11(33)
}, 3000)

