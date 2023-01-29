//1
const grades = () => {
  let yourGrades = parseFloat(window.prompt("Enter your score : "));

  if (yourGrades >= 90 && yourGrades <= 100) {
    console.log("you got A");
  } else if (yourGrades >= 80 && yourGrades <= 89) {
    console.log("you got B");
  } else if (yourGrades >= 70 && yourGrades <= 79) {
    console.log("you got C");
  } else if (yourGrades >= 60 && yourGrades <= 69) {
    console.log("you got D");
  } else if (yourGrades >= 50 && yourGrades <= 59) {
    console.log("you got E");
  } else if (yourGrades >= 0 && yourGrades <= 49) {
    console.log("you are a Failure");
  }
};
// grades();

//2
const checkSeason = () => {
  const enterMonth = window.prompt("Which month is this? : ").toUpperCase();

  if (
    enterMonth === "SEPTEMBER" ||
    enterMonth === "OCTOBER" ||
    enterMonth === "NOVEMBER"
  ) {
    console.log("It's automn season.");
  } else if (
    enterMonth === "DECEMBER" ||
    enterMonth === "JANUARY" ||
    enterMonth === "FEBRUARY"
  ) {
    console.log("Its Winter.");
  } else if (
    enterMonth === "MARCH" ||
    enterMonth === "APRIL" ||
    enterMonth === "MAY"
  ) {
    console.log("Spring season it is.");
  } else {
    console.log("Summer has started");
  }
};
// checkSeason();

//3
