const numbers = [2, 5, 3, 8, 9, 1, 10];

function binarySearch(numbers, value) {
    let sortedList = numbers.sort((a,b) => { return a-b });
    let middle = sortedList[Math.floor( sortedList.length / 2 )];

    let result =false;
    if(value === middle)
        result= true;
    else if( value < middle ){
        for( let i=0; i <middle; i++ ) {
            if(sortedList[i] === value)
                result = true;
        }
    } 
    else {
        for(let i = middle; i <= sortedList.length; i++) {
            if(sortedList[i] === value)
                result = true;
        }
    }
    return result ? 'Found' : 'Not found';
}

console.log(binarySearch(numbers, 6));




