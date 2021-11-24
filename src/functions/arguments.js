function test(a, b) {
    let argLength = arguments.length;
    console.log("Передал " + argLength + " параметров")
}

test()
test(42)
test(42, 33)
test(42, 33, 45)