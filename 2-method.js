const student = {
    id: 105,
    name: 'Zubair Ahmed',
    money: 5000,
    major: 'mathmatics',
    isRich: false,
    subject: ['english', 'bangla', 'math', 'science', 'islamic studies'],
    //TODO - NESTED OBJECT
    bestFriend: {
        name: 'Parul',
        age: 28,
        major: 'mathmatics'
    },
    takeExam: function () {                     //TODO - function is Object
        console.log(this.name, 'taking exam');
    },
    treatDay: function (expense, tips) {
        this.money = this.money - expense - tips;
        return this.money;
    }
}
student.takeExam();
const remaining1 = student.treatDay(900, 100);
const remaining2 = student.treatDay(500, 50);
console.log(remaining2);