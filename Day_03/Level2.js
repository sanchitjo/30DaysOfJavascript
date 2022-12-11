//1
// let base = window.prompt("base : ");
// let height = window.prompt("height : ");

// let area = 0.5 * base * height;
// console.log(area);

//2
const perimiterOfTriangle = () => {
  let a = parseFloat(window.prompt("a"));
  let b = parseFloat(window.prompt("b"));
  let c = parseFloat(window.prompt("c"));
  let perimeter = a + b + c;
  console.log("perimeter : ", perimeter);
};
// perimiterOfTriangle();

//3
const areaOfRectangle = () => {
  let a = parseFloat(window.prompt("value of a is :"));
  let b = parseFloat(window.prompt("value of b is :"));

  console.log("area of rectangle is :", a + b);
};
// areaOfRectangle();

//4
const areaOfCircle = () => {
  let pi = 3.14;
  let r = parseFloat(window.prompt("radius = "));
  console.log("area of circle is : ", pi * r * r);
};
// areaOfCircle();

const circumferenceOfCircle = () => {
  let pi = 3.14;
  let r = parseFloat(window.prompt("radius is : "));
  console.log("circumference of circle is : ", 2 * pi * r);
};
// circumferenceOfCircle();

//6
const slopeOfaLine = () => {
  let x1 = 2;
  let x2 = 6;
  let y1 = 2;
  let y2 = 8;

  let m = (y2 - y1) / (x2 - x1);
  console.log("slope : ", m);
};
slopeOfaLine();

//9
const weeklyEarnings = () => {
  let noOfDays = parseFloat(
    window.prompt("How many days a week do you work ?")
  );
  let noOfHours = parseFloat(
    window.prompt("How many hours a day do you work ?")
  );
  let chargePerHour = parseFloat(
    window.prompt("How much dou charge per hour ?")
  );

  let weekEarned = parseFloat(noOfDays * noOfHours * chargePerHour);
  console.log("Your weekly income is : ", weekEarned);
  console.log("Hence, every month you make :", weekEarned * 4);
};
// weeklyEarnings();

//10
function nameLength() {
  let name = window.prompt("What is your name ? ");
  let nameLength = name.length;
  {
    nameLength >= 7
      ? console.log("You have a long name.")
      : console.log("You have a short name.");
  }
}
// nameLength();

//11
const nameCompare = () => {
  let fName = window.prompt("Your first name : ");
  let lName = window.prompt("Your last name : ");

  {
    fName > lName
      ? console.log(
          `Your first name : ${fName}, is larger than your last name : ${lName}`
        )
      : console.log(
          `Your last name : ${lName},  is larger than your first name : ${fName}`
        );
  }
};
// nameCompare();

//12
const ageCompare = () => {
  let myAge = parseInt(window.prompt("my age is : "));
  let yourAge = parseInt(window.prompt("your age is :"));

  {
    myAge > yourAge
      ? console.log(`I am ${myAge - yourAge} years elder to you.`)
      : console.log(`You are ${yourAge - myAge} years elder to me.`);
  }
};
// ageCompare();

//13
const driveEligible = () => {
  let yourBirthYear = parseInt(window.prompt("Enter your birth year : "));
  let date = new Date().getFullYear();

  let yourAge = date - yourBirthYear;

  {
    yourAge >= 18
      ? console.log(`You are ${yourAge}. You can drive.`)
      : console.log(
          `You are ${yourAge}. You are ${
            18 - yourAge
          } years far from getting a DL kiddo.`
        );
  }
};
// driveEligible();

//14
const lifeInSeconds = () => {
  let yourAge = parseFloat(
    window.prompt("Enter your complete age with months : ")
  );
  let inSeconds = yourAge * 365 * 24 * 60 * 60;

  console.log(`You are alive for ${inSeconds} seconds.`);
};
// lifeInSeconds();

//15
const time = () => {
  let date = new Date().getFullYear();
  console.log("date : ", date);
};
time();
