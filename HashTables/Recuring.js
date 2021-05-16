const array = [2, 5, 1, 2, 3, 5, 1, 2, 4]

const firstRecuring = (array) => {
    for(let i=0; i < array.length; i++) {
        for(let j = i+1; j < array.length ; j++ ){
            if(array[i] === array[j])
                return array[j];
        }
    }
}
// O(n^2)


const firstRecuring2  = (array) => {
    let map = {}; 

    for(let i = 0; i < array.length; i++ ) {
        if(map[array[i]]) {
            return array[i];
        } else {
            map[array[i]] = true;
        }
    }
}


console.log(firstRecuring2(array))
