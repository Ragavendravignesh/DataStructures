class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;

        for(let i = 0; i < key.length; i++ ) {
            hash = (hash * key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        const address = this._hash(key);
        if(!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);
    }

    get(key) {
        const address = this._hash(key);
        const item = this.data[address];
        if(item) {
            for(let i=0; i < item.length; i++) {
                if(this.data[address][0][0] === key) {
                    return this.data[address][0][1]
                }    
            }
        }
    }

    keys() {
        for(let i =0; i< this.data.length; i++){
            for( let j =0; j< this.data[i].length; j++) {
                return this.data[i][j][0]
            }
        }
     }
}

const hash = new HashTable(10);
hash.set('A', 10)
console.log(hash.get('A'));
console.log(hash.keys())