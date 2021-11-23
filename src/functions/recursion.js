function timer(n) {
    if (n <= 0) {
        console.log("End!!!")
        return
    }

    setTimeout(() => {
        console.log(n)
        timer(n - 1)
    }, 1000)
}

timer(5)