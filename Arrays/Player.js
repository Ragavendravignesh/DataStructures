class player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi i'm ${this.name}, and I'm ${this.type}`)
    }
}

class wizard extends player {
    constructor(name, type) {
        super(name, type);
    }

    whatIDo() {
        console.log(`Weee, I'm  ${this.type}`)
    }
}

const wizard1 = new wizard('Joseph', 'Doctor');
const wizard2 = new wizard('Marry', 'Engineer');

wizard2.introduce();
wizard2.whatIDo();