const name="simran";
const repo=5;
console.log(name+repo+" value");  // this is old method
// new method:
console.log(`my name is ${name} and repo count is ${repo}`);
// declare using object
const Fname=new String('simran');
console.log(Fname);
console.log(Fname[0]);
console.log(Fname.__proto__); // give prototype
console.log(Fname.length);
console.log(Fname.toUpperCase());
console.log(Fname.charAt(2));
console.log(Fname.indexOf('m'));
const ans=Fname.substring(0,3);
console.log(ans);
const ans1=Fname.slice(0,3); // we also give negetive values also
console.log(ans1);
// to remove extra space we use trim function
const anotherString="  simran  ";
console.log(anotherString);
console.log(anotherString.trim());
// to replace value we use replace function:
const a1="sim4ran";
console.log(a1.replace("4","-"));
// include function is used to check the value is present or not
console.log(a1.includes("r"));
const a2="hello-simran-vohra";
// split function is used to split the variable name according to some condition
console.log(a2.split("-")); 
