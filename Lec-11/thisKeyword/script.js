// console.log(this);
// this.a = 10; // a = 10;

function fun(){
    console.log(this);
}

// fun();

let person = {
    name:'Abhinav',
    age:26,
    marks: [90, 60, 80],
    sayHello: function(){
        // console.log(this);
        console.log(`Hello! my name is ${this.name}`)
    }
}

// console.log(person);
// person.sayHello();


// ------------- explicit

let person1 = {
    name:'Rahul',
    age:35,
    add:'Noida, Ind'
}

let person2 = {
    name:'Kartik',
    age:38,
    add:'Delhi, Ind'
}

function updatePerson(_name, age, add){
    // console.log(this)
    this.name = _name;
    this.age5 = age;
    this.add = add;
}

updatePerson.call(person1, 'Rahul Dravid', 25, 'Noida, Ind');
updatePerson.apply(person1, ['Rahul Dravid', 25, 'Noida, Ind']);

console.log(person1);

// console.log(window)
