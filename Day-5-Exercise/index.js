
// ==================== ORIGINAL ARRAYS ====================

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya"
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB"
];
//           LEVEL 1 
// 1. Declare an empty array

const emptyArray = [];

console.log("1. Empty array:", emptyArray);


// 2. Declare an array with more than five elements

const numbers = [10, 20, 30, 40, 50, 60, 70];

console.log("2. Array with more than five elements:", numbers);


// 3. Find the length of the array

console.log("3. Length of numbers array:", numbers.length);


// 4. Get the first, middle and last item

const firstNumber = numbers[0];
const middleNumber = numbers[Math.floor(numbers.length / 2)];
const lastNumber = numbers[numbers.length - 1];

console.log("4. First number:", firstNumber);
console.log("Middle number:", middleNumber);
console.log("Last number:", lastNumber);


// 5. Create an array with mixed data types

const mixedDataTypes = [
  "JavaScript",
  25,
  true,
  null,
  undefined,
  { name: "John" },
  [1, 2, 3]
];

console.log("5. Mixed data types array:", mixedDataTypes);
console.log("Length of mixedDataTypes:", mixedDataTypes.length);


// 6. Declare the itCompanies array

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon"
];

console.log("6. IT companies:", itCompanies);


// 7. Print the number of companies

console.log("7. Number of companies:", itCompanies.length);


// 8. Print the first, middle and last company

console.log("8. First company:", itCompanies[0]);
console.log(
  "Middle company:",
  itCompanies[Math.floor(itCompanies.length / 2)]
);
console.log("Last company:", itCompanies[itCompanies.length - 1]);


// 9. Print every company

console.log("9. Each company:");

itCompanies.forEach(function (company) {
  console.log(company);
});


// 10. Print every company in uppercase

console.log("10. Companies in uppercase:");

itCompanies.forEach(function (company) {
  console.log(company.toUpperCase());
});


// 11. Print the companies as a sentence

console.log(
  "11. Companies sentence:",
  `${itCompanies.slice(0, -1).join(", ")} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`
);


// 12. Check if a company exists

const companyToFind = "Google";

if (itCompanies.includes(companyToFind)) {
  console.log("12. Company found:", companyToFind);
} else {
  console.log("12. Company is not found.");
}


// 13. Find companies with more than one letter o
// This is done without using the filter() method.

const companiesWithMoreThanOneO = [];

for (let i = 0; i < itCompanies.length; i++) {
  const numberOfOs = itCompanies[i].toLowerCase().split("o").length - 1;

  if (numberOfOs > 1) {
    companiesWithMoreThanOneO.push(itCompanies[i]);
  }
}

console.log(
  "13. Companies with more than one 'o':",
  companiesWithMoreThanOneO
);


// 14. Sort the array

const sortedCompanies = [...itCompanies].sort();

console.log("14. Sorted companies:", sortedCompanies);


// 15. Reverse the array

const reversedCompanies = [...itCompanies].reverse();

console.log("15. Reversed companies:", reversedCompanies);


// 16. Slice out the first three companies

console.log(
  "16. First three companies:",
  itCompanies.slice(0, 3)
);


// 17. Slice out the last three companies

console.log(
  "17. Last three companies:",
  itCompanies.slice(-3)
);


// 18. Slice out the middle company or companies

const middleStart = Math.floor((itCompanies.length - 1) / 2);
const middleEnd = Math.ceil((itCompanies.length + 1) / 2);

console.log(
  "18. Middle company or companies:",
  itCompanies.slice(middleStart, middleEnd)
);


// 19. Remove the first IT company

const withoutFirstCompany = [...itCompanies];

withoutFirstCompany.shift();

console.log(
  "19. Array after removing the first company:",
  withoutFirstCompany
);


// 20. Remove the middle company or companies

const withoutMiddleCompanies = [...itCompanies];

const middleIndex = Math.floor(withoutMiddleCompanies.length / 2);

if (withoutMiddleCompanies.length % 2 === 0) {
  withoutMiddleCompanies.splice(middleIndex - 1, 2);
} else {
  withoutMiddleCompanies.splice(middleIndex, 1);
}

console.log(
  "20. Array after removing the middle company or companies:",
  withoutMiddleCompanies
);


// 21. Remove the last IT company

const withoutLastCompany = [...itCompanies];

withoutLastCompany.pop();

console.log(
  "21. Array after removing the last company:",
  withoutLastCompany
);


// 22. Remove all IT companies

const noCompanies = [...itCompanies];

noCompanies.splice(0, noCompanies.length);

console.log("22. Array after removing all companies:", noCompanies);


// ==================== LEVEL 2 ====================


// 23. Remove punctuation and count the words

const text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

const words = text.replace(/[.,]/g, "").split(" ");

console.log("23. Words:", words);
console.log("Number of words:", words.length);


// 24. Shopping cart exercises

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}

if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}

const honeyIndex = shoppingCart.indexOf("Honey");

if (honeyIndex !== -1) {
  shoppingCart.splice(honeyIndex, 1);
}

const teaIndex = shoppingCart.indexOf("Tea");

if (teaIndex !== -1) {
  shoppingCart[teaIndex] = "Green Tea";
}

console.log("24. Updated shopping cart:", shoppingCart);


// 25. Check if Ethiopia exists

const countriesCopy = [...countries];

if (countriesCopy.includes("Ethiopia")) {
  console.log("25. ETHIOPIA");
} else {
  countriesCopy.push("Ethiopia");
  console.log("Ethiopia was added:", countriesCopy);
}


// 26. Check if Sass exists in webTechs

const webTechsCopy = [...webTechs];

if (webTechsCopy.includes("Sass")) {
  console.log("26. Sass is a CSS preprocess");
} else {
  webTechsCopy.push("Sass");
  console.log("Sass was added to webTechs:", webTechsCopy);
}


// 27. Concatenate frontEnd and backEnd

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];

const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);

console.log("27. Full stack:", fullStack);


// ==================== LEVEL 3 ====================


// 28. Sort the ages and find the minimum and maximum

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sortedAges = [...ages].sort(function (a, b) {
  return a - b;
});

const minimumAge = sortedAges[0];
const maximumAge = sortedAges[sortedAges.length - 1];

console.log("28. Sorted ages:", sortedAges);
console.log("Minimum age:", minimumAge);
console.log("Maximum age:", maximumAge);


// 29. Find the median age

let medianAge;

if (sortedAges.length % 2 === 0) {
  const middleOne = sortedAges[sortedAges.length / 2 - 1];
  const middleTwo = sortedAges[sortedAges.length / 2];

  medianAge = (middleOne + middleTwo) / 2;
} else {
  medianAge = sortedAges[Math.floor(sortedAges.length / 2)];
}

console.log("29. Median age:", medianAge);


// 30. Find the average age

const totalAge = ages.reduce(function (sum, age) {
  return sum + age;
}, 0);

const averageAge = totalAge / ages.length;

console.log("30. Average age:", averageAge);


// 31. Find the range of the ages

const ageRange = maximumAge - minimumAge;

console.log("31. Range of ages:", ageRange);


// 32. Compare the values of min - average and max - average

const minimumDifference = Math.abs(minimumAge - averageAge);
const maximumDifference = Math.abs(maximumAge - averageAge);

console.log(
  "32. Difference between min and average:",
  minimumDifference
);

console.log(
  "Difference between max and average:",
  maximumDifference
);


// 33. Slice the first ten countries

const firstTenCountries = countries.slice(0, 10);

console.log("33. First ten countries:", firstTenCountries);


// 34. Find the middle country or countries

const countryMiddleStart = Math.floor((countries.length - 1) / 2);
const countryMiddleEnd = Math.ceil((countries.length + 1) / 2);

console.log(
  "34. Middle country or countries:",
  countries.slice(countryMiddleStart, countryMiddleEnd)
);


// 35. Divide the countries into two equal arrays
// If the number is odd, the first half receives one extra country.

const firstHalfLength = Math.ceil(countries.length / 2);

const firstHalfCountries = countries.slice(0, firstHalfLength);
const secondHalfCountries = countries.slice(firstHalfLength);

console.log("35. First half of countries:", firstHalfCountries);
console.log("Second half of countries:", secondHalfCountries);
