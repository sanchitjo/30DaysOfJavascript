//1
const legalAgeToDrive = () => {
  let age = parseInt(window.prompt("What is your age? "));

  let diff = 18 - age;

  age >= 18
    ? console.log("You can drive. Drive responsibly.")
    : console.log(`Go home kiddo. Come back in ${diff} years`);
};
// legalAgeToDrive();

//2
const yourAge = () => {
  let myAge = 26;
  let yourAge = parseInt(window.prompt("Enter your age: "));

  let elderDiff = yourAge - myAge;
  let youngerDiff = myAge - yourAge;

  if (yourAge > myAge) {
    console.log(`you are ${elderDiff} years elder to me.`);
  } else if (yourAge < myAge) {
    console.log(`you are ${youngerDiff} years younger to me.`);
  } else {
    console.log("we are the same age.");
  }
};
// yourAge();

//4
const checkForOddorEven = () => {
  const num = parseFloat(window.prompt("Enter any number : "));

  num % 2 === 0
    ? console.log(`${num} is a even number.`)
    : console.log(`${num} is an odd number.`);
};
// checkForOddorEven();
