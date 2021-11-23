function f1(name) {
    setTimeout(function (){
        console.log(name + " -> Zarina")
        name = "Zarina"
    }, 3000)
    return function (age) {
        console.log(name, age)
    }
}

const f11 = f1("Baki");

f11(33)

setTimeout(function (){
    f11(33)
}, 4000)

