const array1 = ['a', 'b', 'c', 'd', 'e'];
const array2 = ['x', 'y', 'z', 'r'];


function findCommonItems (arr1, arr2) {
    let map = {};

    for (let i=0; i < arr1.length; i++ ) {
        if(!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }

    for(let j=0; j < arr2.length; j++) {
        if(map[arr2[j]]) {
            return true;
        }
    }
    return false;
}

console.log(findCommonItems(array1, array2));

/*----------------------------------------------------------*/

function findCommonItems2( arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

console.log(findCommonItems2(array1, array2));