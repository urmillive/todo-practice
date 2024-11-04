const initialArray = [ 1, 2, 3 ];

function logThings(params) {
    console.log(params, ' is the string');
    return params + 10;
}

initialArray.forEach(logThings);

class Animal {
    constructor(name, legCount) {
        this.name = name;
        this.legCount = legCount;
    }
    present() {
        console.log('====================================');
        console.log(this.name);
        console.log(this.legCount);
        console.log('====================================');
    }
}

const a = new Animal("Horse", 15);
a.present();

