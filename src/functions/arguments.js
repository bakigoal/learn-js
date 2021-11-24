function test(a, b) {
    let argLength = arguments.length; //[42, 33, 45]
    console.log("Передал " + argLength + " параметров")

    let first = arguments[0];
    console.log(first)

    let last = arguments[argLength - 1];
    console.log(last)
}

test()
test(42)
test(42, 33)
test(42, 33, 45)
test(42, 33, 45, 23, 234, 35, 566, 575, "23423", 66)

function addWork() {
    let length = arguments.length;
    console.log("ЗАписываю работу :")
    for (let i = 0; i < length; i++) {
        console.log("- ", arguments[i])
    }
}

addWork("LAminat")
addWork("р1", "р2", "p3", "p4")