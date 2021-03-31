const MAX = 255;

class Colors {
    
    constructor () {
        let color = "";
        this.color = `color: (${this.color()}, ${this.color()}, ${this.color()})`;
    }

    color() {
        return Math.floor( MAX * Math.random());
    }

    getColor() {
        return this.color;
    }
}

const randomInt = () => {
    return Math.floor(Math.random() * MAX);
}

const color = new Colors();

console.log(color.getColor());