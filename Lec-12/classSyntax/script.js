
class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    print(){
        console.log(this.name, this.age, this.gender);
    }

    get getAge(){
        return this.age;
    }

    set setAge(age){
        this.age = age;
    }
}

let p1 = new Person('Rohit', 25, 'M');
console.log(p1);

p1.print();
// p1.getAge(); //  will throw an error
console.log(p1.getAge);

// p1.setAge(40); // will throw an error
p1.setAge = 40;

p1.print();

