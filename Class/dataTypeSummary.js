// Symbol is used when unique id is there
const anotherId = Symbol("123");
console.log(typeof(anotherId));

const id = 123;
console.log(id === anotherId);

// JavaScript is the Dynamic Language not static ---> Interview Question

// Array
const course = ['aiml', 'genAi', 'promptEngering'];
const num = [1, 2, 3];

// Objects
const obj ={
    fname : "js",
    age : 24
}
console.log(obj.age);

// Function
function names(){
    console.log("Tejas Babar");
}
names();