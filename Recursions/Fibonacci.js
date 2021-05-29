function fib(number) {
    if(number < 2)
        return number;
    return fib(number - 1) + fib(number - 2)
}

console.log(fib(4));