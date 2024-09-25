// numbers
const score=400;
console.log(score);

// new method using object:
const marks=new Number(50);
console.log(marks);

// number methods:
console.log(marks.toString());  //covert to string
console.log(marks.toString().length); //aplly all the string properties because it is converted into string
console.log(marks.toFixed(2));  //how many digits required after decimal

const num=89.234;
console.log(num.toPrecision(3));  //give precise (roundoff) of value and convert in to string
const num1=100000;
console.log(num1.toLocaleString()) // gives values with commas (us standard)
console.log(num1.toLocaleString('en-IN')) // comma acc to indian standard

//++++++++++++++++++++ Maths +++++++++++++++++++++++
// math is library in js 
console.log(Math);
console.log(Math.abs(-3));  //gives absolute value(+ve)
console.log(Math.round(23.5));  //gives round off
console.log(Math.ceil(3.4));
console.log(Math.floor(3.7));
console.log(Math.min(3,4,9,7));
console.log(Math.max(3,4,9,7));

console.log(Math.random()); // gives values in between 0-1;
console.log((Math.random()*10) +1); //gives value in between 1 to 10

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min +1))+min);