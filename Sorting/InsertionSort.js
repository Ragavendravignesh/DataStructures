const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function InsertionSort(array) {
    const length = array.length;
    for(let i=0; i < length; i++) {
        for( let j=0; j< length; j++) {
            if( array[i] < array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}

console.log(InsertionSort(numbers));