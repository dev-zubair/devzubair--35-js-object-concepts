//OPTIMIZE -ekhane color holo KEYS and 'Yellow' holo VALUES ebong duita ekshathe bole PAIRS/ENTRIES
const bottle = { color: 'yellow', hold: 'water', price: 50, isCleaned: true };

//TODO - amra jodi shudhu bottol er KEYS gulo dekhte chai
const keys = Object.keys(bottle);
console.log(keys);

//TODO - amra jodi shudhu bottol er VALUES gulo dekhte chai
const values = Object.values(bottle);
console.log(values);

//TODO - amra jodi shudhu bottol er PAIRS gulo dekhte chai
const pairs = Object.entries(bottle);
console.log(pairs);

//TODO - amra jodi kono PAIRS ke delete korte chai
delete bottle.isCleaned;
console.log(bottle);

//TODO - amra jodi puro OBJECT ta ke SEAL mari tahole kono property delete korte parbe na emon ki kono property add korte o parbo na kintu ami chale VALUES change korte parbo. nicher delete code are kaj korbe na
Object.seal(bottle);
delete bottle.isCleaned;
console.log(bottle);

//TODO - amra jodi kono VALUES er man change korte chai
Object.freeze(bottle);
bottle.price = 200;
bottle.height = '16 inch';
console.log(bottle);


//freez and seal onek ta kacha kachi. SEAL kichuta change korar sujog dibe kintu delete ar add korte dibe na. kintu freez korle kichui kora jabe na  
