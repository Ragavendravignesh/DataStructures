const movies = ['Conjuring', 'Godzilla', 'Narnia', 'Mummy', 'Shark'];

console.log(movies.indexOf('Godzilla'));

console.log(movies.find(movie => {return movie === 'Godzilla' }));

console.log(movies.findIndex(movie => { return movie === 'Godzilla' }));

console.log(movies.includes('Godzilla'));

function search(value, movies) {
    for(let i=0; i < movies.length; i++ ){
        if( movies[i] === value )
            return 'Match found!'
    }
}

console.log(search('Godzilla', movies));