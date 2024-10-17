// 1. Data Types: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet() {
        console.log("Hello, my name is " + this.name);
    }

    run() {
        console.log(this.name + " is running");
    }

    sleep() {
        console.log(this.name + " is sleeping");
    }
}
let wilson = new Person("Wilson", 25);

let wilson1 = {
    name: "Wilson",
    age: 25,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    },
    run: function() {
        console.log(this.name + " is running");
    },
    sleep: function() {
        console.log(this.name + " is sleeping");
    }
}

console.log(wilson.age, wilson.name);
//wilson = 35
console.log(wilson);

// Primitive types
let age = 25;//number
let price = 100.5 //number

let name = "Wilson" //string

let isMarried = true //boolean

console.log(typeof wilson);

// Variable declaration and assignment/initialization

//Declaration: let, const, var

//Assignment/Initialization: =, +=, -=, *=, /=, %=, **=

// let age = 25; //Declaration and assignment
age = 35; //Assignment

let gender = undefined; //Declaration
console.log(typeof gender)


// 2. Operators
// Arithmetic operators: +, -, *, /, %, **
let a = 10, b = 3, c = 5;
console.log("a + b = ", a + b * c);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);


// Assignment operators: =, +=, -=, *=, /=, %=, **=
a = 10;
a += 5; // a = a + 5
console.log("a += 5: ", a)
a -= 5; // a = a - 5
console.log("a -= 5: ", a)
a *= 5; // a = a * 5
console.log("a *= 5: ", a)
a /= 5; // a = a / 5
console.log("a /= 5: ", a)
a %= 5; // a = a % 5

if(8 % 3 === 0) {
    console.log("8 is divisible by 3");
} else {
    console.log("8 is not divisible by 3");
}

// how many numbers from 1 to 100,000,000,000 are divisible by 7?
//let count = 0;
// for(let i = 1; i <= 100000000000; i++) {
//     if(i % 7 === 0) {
//         count++; // count = count + 1 or count += 1
//     }
// }

let start = 7;
let count = 1
while(start <= 100000000000) {
    count += 100;
    start += 700;
}
let lastJump = start - 700;
count += Math.floor((100000000000 - lastJump) / 7);
console.log("Numbers divisible by 7 from 1 to 100,000,000,000 is ", count);

// Sn = a + (n - 1)d
// a =1
// n = ?
//     d = 7
//     Sn = 100000000000

// Comparison operators: ==, ===, !=, !==, >, <, >=, <=
// Logical operators: &&, ||, !
// Increment/Decrement operators: ++, --
// Conditional (Ternary) operator: condition ? expr1 : expr2
// Bitwise operators: &, |, ^, ~, <<, >>, >>>
// typeof operator
// delete operator
// in operator
// instanceof operator
// new operator
// this operator
// void operator
// yield operator



// 3. Control Structures