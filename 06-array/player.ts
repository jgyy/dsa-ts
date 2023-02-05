class Player {
    name: string;
    type: string;
    constructor(name: string, type: string) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name: string, type: string) {
        super(name, type);
        console.log('wizard', this);
    }
    play() {
        console.log(`Weeeeeee I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
