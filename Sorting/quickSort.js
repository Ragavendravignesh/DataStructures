const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function QuickSort(array, left, right) {
    let pivot;
    let partitionIndex;

    if(left < right) {
        pivot = right;
        partitionIndex = partition(array, pivot, left, right);

        QuickSort(array, left, partitionIndex-1);
        QuickSort(array, partitionIndex+1, right);
    }
    return array;
}

function partition(array, pivot, left, right) {
    let partitionIndex = left;

    for(let i = left; i < right; i++) {
        if(array[i] < array[pivot]) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}

function swap(array, swappableIndex, initialIndex ) {
    let temp = array[swappableIndex];
    array[swappableIndex] = array[initialIndex];
    array[initialIndex] = temp;
}


console.log(QuickSort(numbers, 0, numbers.length -1));