function mergeSortedArrays(arr1, arr2) {
    const arr3 = [...arr1 , ...arr2];

    return arr3.sort();
}

const arr1 = [1,2,3,4];
const arr2 = [7,8,9];

console.log(mergeSortedArrays(arr1, arr2));