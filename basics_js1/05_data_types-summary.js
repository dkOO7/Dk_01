//  Primitive

// 7 types : string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined; // let userEmail;

const id =Symbol('123')
const anotherID = Symbol('123')
console.log(id==anotherID);

const bigNUmber = 29292921091923922n   // bigint
console.log(typeof bigNUmber);

// Reference type (Non Primitive)
// Arrays, Objects, Functions

const heros = ["Ironman","Shaktiman","Batman","Hulk"]
let myObj = {
    name: "Dikshay",
    age: 19
}

const myFunction = function() {
    console.log("Hello world");
    
}

console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myObj);


// ***********************Return-Values**********************
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object