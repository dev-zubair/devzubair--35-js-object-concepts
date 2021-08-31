const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
/* 
for(let i = 0; i<10;i++){}
for(const num of numbers){}  //TODO - FOR OF - use it on an array othoba array like object
for(const prop in student){} //TODO - FOR IN - use it on an object
*/
//TODO - sudhu object er PROPERTY gulo pete chaile
for (const prop in bottle) {
    // console.log(prop);
}
//OPTIMIZE - kono object er PROPERTY er VALUE 3 vale ber kora jay. 

//TODO - You can access the properties of an object in JavaScript in 3 ways:
// Dot property accessor: object. property.
// Square brackets property access: object['property']
// Object destructuring: const { property } = object.       // mane kono ekta variable 

//TODO - sudhu object er VALUE gulo pete chaile.
for (const prop in bottle) {
    // console.log(bottle[prop]);
    // console.log(prop, bottle[prop]);
    // console.log(bottle["color"]);
    // console.log(bottle[prop]);
}

const keys = Object.keys(bottle);
// console.log(keys);
for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

// advanced
const entries = Object.entries(bottle);
// console.log(entries);
// const [key, value] = ['color', 'yellow'];
for (const [key, value] of Object.entries(bottle)) {
    // console.log(key, value);
}

// 
// const arr = ['color', 'jeans', 'tom']
// arr['color']