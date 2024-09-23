console.log("simran")
// let const var:
const acc_id=112233; //const can't be change
let email="simran2@gmail.com"; //it can be change or updated
var password="12345"; //var is not used because of scope issue
city="jaipur"; //we directly defined but it is bad pactice

console.table([acc_id,email,password,city]); // prints in tabular form


// updated values
email="abc@gmail.com";
password="23456";
city="ambala";
console.table([acc_id,email,password,city]);


// datatypes:
let name="simran";
let age=18;
let loggedin=false;
// string,  boolean,  number,  bigint,  symbol=unique,  null=standalone value,  undefined  ,object

// to chect type we use typeof() operator
console.log(typeof null) //object
console.log(typeof undefined) // undefined


