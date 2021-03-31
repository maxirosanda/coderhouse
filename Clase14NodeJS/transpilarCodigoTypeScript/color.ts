const MAX:number = 255;


class Colors {

    private color:string = "";

    constructor(){
        this.color = `color: (${this.createColor()}, ${this.createColor()}, ${this.createColor()})`;
    }

    private createColor() {
        return Math.floor(MAX * Math.random());
    }

    getColor() {
        return this.color;
    }
}

function init() {
    let nuevoColor = new Colors();
    console.log(nuevoColor.getColor());
}

init();