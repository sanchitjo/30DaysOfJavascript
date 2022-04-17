// Data Types : 

// Primitive and Non-Primitive :

/* Primitive : Number String Boolean null undefined  = are immutable

Non-Primitive : objects functions arrays = mutable i.e. can be changed and hence two exactly same 
non primitive data types won't be strictly same!

Rule of thumb, we do not compare non-primitive data types.
Do not compare arrays, functions, or objects. 
Non-primitive values are referred to as reference types, because they are being compared by reference instead of value.
Two objects are only strictly equal if they refer to the same underlying object.

e.g. 
let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true

*/