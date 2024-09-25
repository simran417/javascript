const myDate=new Date();
console.log(myDate);  //it is not readable 
console.log(typeof(myDate));
console.log(myDate.toString()); //it is readable
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

const createDate=new Date(2023,0,22); //months start from 0
// console.log(createDate.toDateString());

// const createDate=new Date(2023,0,22,5,3); 
// console.log(createDate.toLocaleString());

// const createDate=new Date("2023-01-14"); 
// console.log(createDate.toLocaleString());

// time stamp
let d=Date.now();
console.log(d); //gives milli second
console.log(createDate.getTime());
// convert milli sec to sec
console.log(Math.floor(Date.now()/1000));

d.toLocaleString('default',{
    weekday:"long"
})


