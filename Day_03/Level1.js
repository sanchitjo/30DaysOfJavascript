//1
let firstName = "Sanchit";
let lastName = "Joshi";
let country = "India";
let city = "Bangalore";
let age = 25;
let isMarried = false;

let year = new Date().getFullYear();

console.log("firstName", typeof firstName);
console.log("lastName", typeof lastName);
console.log("country", typeof country);
console.log("city", typeof city);
console.log("age", typeof age);
console.log("isMarried", typeof isMarried);
console.log("year", typeof year);

//2
console.log("check", typeof "10" == typeof 10);

//3
console.log("parseInt", parseInt("9.8") == 10); //false but parseInt('10') == 10 is true

//5
console.log("4==4", 4 == 4);
console.log("4===4", 4 === 4);
console.log("4!=4", 4 != 4);
console.log("4!==4", 4 !== 4);
console.log("4!=string 4", 4 != "4");
console.log("4==string4", 4 == "4");
console.log("4===string4", 4 === "4");

console.log("python and jrgon", "python".length > "jargon".length);
