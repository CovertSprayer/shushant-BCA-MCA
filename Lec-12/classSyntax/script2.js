
class Vehicle{
    constructor(color, np){
        this.color = color;
        this.np = np;
    }

    set setNP(np){
        this.np = np;
    }
}

let v1 = new Vehicle('black', 'A213A45AD');
console.log(v1);

class Car extends Vehicle{
    constructor(seater, color, np){
        super(color, np);
        this.seater = seater;
    }

    set setSeater(seater){
        this.seater = seater;
    }
}

let car1 = new Car(4, 'Brown', '1234ABCD');
console.log(car1);