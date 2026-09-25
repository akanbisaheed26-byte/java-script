
//  LEVEL 1 


let userAge = Number(prompt("Enter your age:"));

if (userAge >= 18) {
  console.log("You are old enough to drive.");
} else {
  let yearsLeft = 18 - userAge;

  console.log(
    `You are left with ${yearsLeft} years to drive.`
  );
}

let myAge = 25;
let yourAge = Number(prompt("Enter your age:"));

if (yourAge > myAge) {
  console.log(
    `You are ${yourAge - myAge} years older than me.`
  );
} else if (myAge > yourAge) {
  console.log(
    `I am ${myAge - yourAge} years older than you.`
  );
} else {
  console.log("We are the same age.");
}

let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

let result = a > b
  ? `${a} is greater than ${b}`
  : `${a} is less than ${b}`;

console.log(result);


let number = Number(prompt("Enter a number:"));

if (number % 2 === 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}


let score = Number(prompt("Enter the student's score:"));

if (score >= 80 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 70 && score <= 79) {
  console.log("Grade: B");
} else if (score >= 60 && score <= 69) {
  console.log("Grade: C");
} else if (score >= 50 && score <= 59) {
  console.log("Grade: D");
} else if (score >= 0 && score <= 49) {
  console.log("Grade: F");
} else {
  console.log("Invalid score");
}

let month = prompt("Enter a month:");

month = month.trim().toLowerCase();

if (
  month === "september" ||
  month === "october" ||
  month === "november"
) {
  console.log("The season is Autumn.");
} else if (
  month === "december" ||
  month === "january" ||
  month === "february"
) {
  console.log("The season is Winter.");
} else if (
  month === "march" ||
  month === "april" ||
  month === "may"
) {
  console.log("The season is Spring.");
} else if (
  month === "june" ||
  month === "july" ||
  month === "august"
) {
  console.log("The season is Summer.");
} else {
  console.log("Invalid month.");
}

let day = prompt("What is the day today?");

day = day.trim().toLowerCase();

if (day === "saturday" || day === "sunday") {
  console.log(
    `${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend.`
  );
} else if (
  day === "monday" ||
  day === "tuesday" ||
  day === "wednesday" ||
  day === "thursday" ||
  day === "friday"
) {
  console.log(
    `${day.charAt(0).toUpperCase() + day.slice(1)} is a working day.`
  );
} else {
  console.log("Invalid day.");
}


let monthName = prompt("Enter a month:");

monthName = monthName.trim().toLowerCase();

if (
  monthName === "january" ||
  monthName === "march" ||
  monthName === "may" ||
  monthName === "july" ||
  monthName === "august" ||
  monthName === "october" ||
  monthName === "december"
) {
  console.log(
    `${monthName.charAt(0).toUpperCase() + monthName.slice(1)} has 31 days.`
  );
} else if (
  monthName === "april" ||
  monthName === "june" ||
  monthName === "september" ||
  monthName === "november"
) {
  console.log(
    `${monthName.charAt(0).toUpperCase() + monthName.slice(1)} has 30 days.`
  );
} else if (monthName === "february") {
  console.log("February has 28 days.");
} else {
  console.log("Invalid month.");
}

let selectedMonth = prompt("Enter a month:");
let selectedYear = Number(prompt("Enter a year:"));

selectedMonth = selectedMonth.trim().toLowerCase();

let daysInMonth;

if (selectedMonth === "february") {
  if (
    (selectedYear % 4 === 0 && selectedYear % 100 !== 0) ||
    selectedYear % 400 === 0
  ) {
    daysInMonth = 29;
  } else {
    daysInMonth = 28;
  }
} else if (
  selectedMonth === "april" ||
  selectedMonth === "june" ||
  selectedMonth === "september" ||
  selectedMonth === "november"
) {
  daysInMonth = 30;
} else if (
  selectedMonth === "january" ||
  selectedMonth === "march" ||
  selectedMonth === "may" ||
  selectedMonth === "july" ||
  selectedMonth === "august" ||
  selectedMonth === "october" ||
  selectedMonth === "december"
) {
  daysInMonth = 31;
} else {
  console.log("Invalid month.");
}

if (daysInMonth !== undefined) {
  let formattedMonth =
    selectedMonth.charAt(0).toUpperCase() +
    selectedMonth.slice(1);

  console.log(
    `${formattedMonth} has ${daysInMonth} days in ${selectedYear}.`
  );
}
