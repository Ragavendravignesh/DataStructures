let counter = 0;
function inception() {
    if(counter > 3) {
        return "Done!";
    }
    counter++;
    return inception();
}

console.log(inception());

/* 
Identify the base case
identify the recursive case
Get closer and closer. Usually it contains two return statements. */