//number

let num = 120

// console.log(typeof num);

let num2 = new Number(12); // converting it into object
// console.log(num2);


//null and undifined  

// let name;
// console.log(name);//undifed

let name = null
// console.log(name);// null 
let lastname = undefined
// console.log(lastname); // we can littarally explicitly put the vaalue as undifined

//string
let mystring = "hello"

let messsage = 'kuldeep'

// console.log(mystring + messsage );

let oldway = "hello"
// console.log(oldway + " kuldeep")

let newway = `hello ${messsage} !`
// console.log(newway);

//Symbol can be difined for  uniqueness the whole point is to generate unique value

let sam1 = Symbol();
let sam2 = Symbol();

console.log(sam1 == sam2);

