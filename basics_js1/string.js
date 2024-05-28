const name ="Dikshay"
const repo_Count = 50

// console.log(name + repo_Count + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repo_Count}`);

const game_Name = new String('Dikshay_sharma')

// console.log(game_Name[0]);
// console.log(game_Name.__proto__);


// console.log(game_Name.length);
// console.log(game_Name.toLowerCase());
// console.log(game_Name.toUpperCase());
console.log(game_Name.charAt(6));
console.log(game_Name.indexOf('y'));

const new_String = game_Name.substring(0, 5)   // last value not included and no negative value 
console.log(new_String);

const another_string = game_Name.slice(-12, 5)  // negative values are taken 
console.log(another_string);

const newStringOne = "  Dikshay   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dikshay.com/dikshay%20sharma"
console.log(url.replace('%20','-'));

console.log(url.includes('dikshay'))
console.log(url.includes('abc'))

console.log(game_Name.split('_'));