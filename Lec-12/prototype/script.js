function Student(name, age, marks){
    this.name = name;
    this.age = age;
    this.marks = marks;

}

Student.prototype.totalMarks = function(){
    return this.marks[0] + this.marks[1] + this.marks[2];
}

let s1 = new Student('Abhishek', 28, [90, 80, 70]);
let s2 = new Student('Rahul', 22, [50, 30, 99]);
console.log(s1, s2);