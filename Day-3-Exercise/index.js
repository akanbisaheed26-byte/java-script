

let firstName = "YourFirstName";
let lastName = "YourLastName";
let country = "YourCountry";
let city = "YourCity";
let age = 25;
let isMarried = false;
let year = 2026;

console.log("1. Data types:");
console.log("firstName:", typeof firstName);
console.log("lastName:", typeof lastName);
console.log("country:", typeof country);
console.log("city:", typeof city);
console.log("age:", typeof age);
console.log("isMarried:", typeof isMarried);
console.log("year:", typeof year);


console.log(
  "2. Is typeof '10' equal to typeof 10?:",
  typeof "10" === typeof 10
);


console.log(
  "3. Is parseInt('9.8') equal to 10?:",
  parseInt("9.8") === 10
);


let isJavaScriptFun = true;
let isTheSkyBlue = 5 > 2;

console.log("4. Boolean values:", isJavaScriptFun, isTheSkyBlue);



console.log("5. Truthy statements:");
console.log(Boolean(10));
console.log(Boolean("JavaScript"));
console.log(Boolean(true));


console.log("6. Falsy statements:");
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(false));



console.log("7. Comparison expressions:");

console.log("4 > 3:", 4 > 3);
console.log("4 >= 3:", 4 >= 3);
console.log("4 < 3:", 4 < 3);
console.log("4 <= 3:", 4 <= 3);
console.log("4 == 4:", 4 == 4);
console.log("4 === 4:", 4 === 4);
console.log("4 != 4:", 4 != 4);
console.log("4 !== 4:", 4 !== 4);
console.log("4 != '4':", 4 != "4");
console.log("4 == '4':", 4 == "4");
console.log("4 === '4':", 4 === "4");


let python = "python";
let jargon = "jargon";

console.log("8. Length of python:", python.length);
console.log("Length of jargon:", jargon.length);
console.log(
  "Falsy comparison statement:",
  python.length === jargon.length
);


console.log("9. Logical operator expressions:");

console.log("4 > 3 && 10 < 12:", 4 > 3 && 10 < 12);
console.log("4 > 3 && 10 > 12:", 4 > 3 && 10 > 12);
console.log("4 > 3 || 10 < 12:", 4 > 3 || 10 < 12);
console.log("4 > 3 || 10 > 12:", 4 > 3 || 10 > 12);
console.log("!(4 > 3):", !(4 > 3));
console.log("!(4 < 3):", !(4 < 3));
console.log("!(false):", !false);
console.log(
  "!(4 > 3 && 10 < 12):",
  !(4 > 3 && 10 < 12)
);
console.log(
  "!(4 > 3 && 10 > 12):",
  !(4 > 3 && 10 > 12)
);
console.log("!(4 === '4'):", !(4 === "4"));



console.log(
  "10. Is 'on' found in both dragon and python?:",
  "dragon".includes("on") && "python".includes("on")
);



let today = new Date();

console.log("11. Today's date:", today);
console.log("Year today:", today.getFullYear());
console.log("Month today as a number:", today.getMonth() + 1);
console.log("Date today:", today.getDate());
console.log("Day today as a number:", today.getDay());
console.log("Hours now:", today.getHours());
console.log("Minutes now:", today.getMinutes());
console.log(
  "Seconds elapsed since January 1, 1970:",
  today.getTime()
);


let triangleBase = Number(prompt("Enter the base of the triangle:"));
let triangleHeight = Number(prompt("Enter the height of the triangle:"));

let triangleArea = 0.5 * triangleBase * triangleHeight;

console.log("12. The area of the triangle is:", triangleArea);


let sideA = Number(prompt("Enter side a of the triangle:"));
let sideB = Number(prompt("Enter side b of the triangle:"));
let sideC = Number(prompt("Enter side c of the triangle:"));

let trianglePerimeter = sideA + sideB + sideC;

console.log(
  "13. The perimeter of the triangle is:",
  trianglePerimeter
);


let rectangleLength = Number(prompt("Enter the length of the rectangle:"));
let rectangleWidth = Number(prompt("Enter the width of the rectangle:"));

let rectangleArea = rectangleLength * rectangleWidth;
let rectanglePerimeter = 2 * (rectangleLength + rectangleWidth);

console.log("14. The area of the rectangle is:", rectangleArea);
console.log(
  "The perimeter of the rectangle is:",
  rectanglePerimeter
);


let radius = Number(prompt("Enter the radius of the circle:"));
let pi = 3.14;

let circleArea = pi * radius * radius;
let circleCircumference = 2 * pi * radius;

console.log("15. The area of the circle is:", circleArea);
console.log(
  "The circumference of the circle is:",
  circleCircumference
);


let slope = 2;
let yIntercept = -2;
let xIntercept = 1;

console.log("16. Slope of y = 2x - 2:", slope);
console.log("X-intercept:", xIntercept);
console.log("Y-intercept:", yIntercept);


let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;

let slopeBetweenPoints = (y2 - y1) / (x2 - x1);

console.log(
  "17. Slope between points (2, 2) and (6, 10):",
  slopeBetweenPoints
);


console.log(
  "18. Are the two slopes equal?:",
  slope === slopeBetweenPoints
);


let xValue = Number(
  prompt("Enter a value of x for y = x² + 6x + 9:")
);

let yValue = xValue ** 2 + 6 * xValue + 9;

console.log("19. The value of y is:", yValue);
console.log("When x is -3, y is:", (-3) ** 2 + 6 * -3 + 9);


let hoursWorked = Number(prompt("Enter the number of hours worked:"));
let ratePerHour = Number(prompt("Enter the rate per hour:"));

let weeklyEarning = hoursWorked * ratePerHour;

console.log("20. Your weekly earning is:", weeklyEarning);


let yourName = prompt("Enter your name:");

if (yourName.length > 7) {
  console.log("21. Your name is long.");
} else {
  console.log("21. Your name is short.");
}


let myFirstName = "Asabeneh";
let myLastName = "Yetayeh";

if (myFirstName.length > myLastName.length) {
  console.log(
    `22. Your first name, ${myFirstName}, is longer than your family name, ${myLastName}.`
  );
} else if (myFirstName.length < myLastName.length) {
  console.log(
    `22. Your family name, ${myLastName}, is longer than your first name, ${myFirstName}.`
  );
} else {
  console.log(
    `22. Your first name, ${myFirstName}, and family name, ${myLastName}, have the same length.`
  );
}


let myAge = 250;
let yourAge = 25;

let ageDifference = myAge - yourAge;

console.log(
  "23. I am " + ageDifference + " years older than you."
);


let birthYear = Number(prompt("Enter your birth year:"));
let currentYear = new Date().getFullYear();
let drivingAge = currentYear - birthYear;

if (drivingAge >= 18) {
  console.log(
    `24. You are ${drivingAge}. You are old enough to drive.`
  );
} else {
  let yearsToWait = 18 - drivingAge;

  console.log(
    `24. You are ${drivingAge}. You will be allowed to drive after ${yearsToWait} years.`
  );
}


let yearsToLive = Number(
  prompt("Enter the number of years you live:")
);

let secondsInOneYear = 365 * 24 * 60 * 60;
let secondsLived = yearsToLive * secondsInOneYear;

console.log(
  "25. You lived " + secondsLived + " seconds."
);


let currentDate = new Date();

let currentYearNumber = currentDate.getFullYear();
let currentMonthNumber = String(
  currentDate.getMonth() + 1
).padStart(2, "0");
let currentDayNumber = String(
  currentDate.getDate()
).padStart(2, "0");
let currentHours = String(
  currentDate.getHours()
).padStart(2, "0");
let currentMinutes = String(
  currentDate.getMinutes()
).padStart(2, "0");

console.log("26. YYYY-MM-DD HH:mm:");
console.log(
  `${currentYearNumber}-${currentMonthNumber}-${currentDayNumber} ${currentHours}:${currentMinutes}`
);

console.log("DD-MM-YYYY HH:mm:");
console.log(
  `${currentDayNumber}-${currentMonthNumber}-${currentYearNumber} ${currentHours}:${currentMinutes}`
);

console.log("DD/MM/YYYY HH:mm:");
console.log(
  `${currentDayNumber}/${currentMonthNumber}/${currentYearNumber} ${currentHours}:${currentMinutes}`
);


console.log("27. Human-readable time format:");
console.log(
  `${currentYearNumber}-${currentMonthNumber}-${currentDayNumber} ${currentHours}:${currentMinutes}`
);
