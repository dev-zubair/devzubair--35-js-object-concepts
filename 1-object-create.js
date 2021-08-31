//TODO - Using Object Literal
const student = { name: 'Zubair Ahmed', age: 37, job: 'Student' }
console.log(student);

//TODO - Constructor
const person = new Object();
console.log(person);

//TODO - Uporer kono oject theke declare kora. Onek ta Inherit Kora.. jemon celer upor bap, baper upor dada
const student = { name: 'Zubair Ahmed', age: 37, job: 'Student' }
const human = Object(student);
console.log(human.age);

//TODO - syntactical sugar - Class er koddhe this use kore object create kora jay
class myDaughter {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const people = new myDaughter('Fatima', 3);
console.log(people);

//TODO - Function diyeo Object Create kora jay
function fullName(name) {
    this.name = name;
}
const parulName = new fullName('Parul Akther');
console.log(parulName);
