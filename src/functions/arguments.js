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

function addWork(first) {
    console.log("ЗАписываю работу :")
    console.log("- ", first)

    let length = arguments.length;
    console.log(length)
    for (let i = 1; i < length; i++) {
        console.log("- ", arguments[i])
    }
}

addWork("LAminat")
addWork("р1", "р2", "p3", "p4")