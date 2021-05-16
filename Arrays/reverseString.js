function reverse(str) {
    let reverse = '';
    for (let i = str.length-1; i >= 0 ; i -- ) {
        reverse += str[i];
    }
    return reverse;
}

function reverse2(str) {
    return str.split('').reverse().join('');
}

const reverse3 = str =>{return  [...str].reverse().join('');};

console.log(reverse('Hi my name is Ragavendra'));
console.log(reverse2('Hi my name is Ragavendra'));
console.log(reverse3('Hi my name is Ragavendra'));