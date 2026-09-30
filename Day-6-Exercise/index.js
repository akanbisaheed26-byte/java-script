const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']


// =========================
// LEVEL 1
// =========================

// 1. 0 to 10 using for loop
for (let i = 0; i <= 10; i++) {
  console.log(i)
}

// 0 to 10 using while loop
let i = 0
while (i <= 10) {
  console.log(i)
  i++
}

// 0 to 10 using do while loop
i = 0
do {
  console.log(i)
  i++
} while (i <= 10)


// 2. 10 to 0 using for loop
for (let i = 10; i >= 0; i--) {
  console.log(i)
}

// 10 to 0 using while loop
i = 10
while (i >= 0) {
  console.log(i)
  i--
}

// 10 to 0 using do while loop
i = 10
do {
  console.log(i)
  i--
} while (i >= 0)


// 3. Iterate from 0 to n
let n = 10

for (let i = 0; i <= n; i++) {
  console.log(i)
}


// 4. Pattern
for (let i = 1; i <= 7; i++) {
  console.log('#'.repeat(i))
}


// 5. Multiplication pattern
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`)
}


// 6. i, i², i³
console.log('i    i^2   i^3')

for (let i = 0; i <= 10; i++) {
  console.log(`${i}    ${i ** 2}     ${i ** 3}`)
}


// 7. Even numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}


// 8. Odd numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i)
  }
}


// 9. Prime numbers
for (let i = 2; i <= 100; i++) {
  let isPrime = true

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false
      break
    }
  }

  if (isPrime) {
    console.log(i)
  }
}


// 10. Sum of all numbers from 0 to 100
let sum = 0

for (let i = 0; i <= 100; i++) {
  sum += i
}

console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)


// 11. Sum of evens and odds
let evenSum = 0
let oddSum = 0

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i
  } else {
    oddSum += i
  }
}

console.log(`The sum of all evens from 0 to 100 is ${evenSum}.`)
console.log(`The sum of all odds from 0 to 100 is ${oddSum}.`)


// 12. Sum of evens and odds as array
console.log([evenSum, oddSum])


// 13. Array of 5 random numbers
let randomNumbers = []

for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100))
}

console.log(randomNumbers)


// 14. Array of 5 unique random numbers
let uniqueNumbers = []

while (uniqueNumbers.length < 5) {
  let randomNumber = Math.floor(Math.random() * 100)

  if (!uniqueNumbers.includes(randomNumber)) {
    uniqueNumbers.push(randomNumber)
  }
}

console.log(uniqueNumbers)


// 15. Six characters random ID
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let randomId = ''

for (let i = 0; i < 6; i++) {
  randomId += characters[Math.floor(Math.random() * characters.length)]
}

console.log(randomId)


// =========================
// LEVEL 2
// =========================

// 1. Any number of characters random ID
let longId = ''

for (let i = 0; i < 20; i++) {
  longId += characters[Math.floor(Math.random() * characters.length)]
}

console.log(longId)


// 2. Random hexadecimal number
let hexCharacters = '0123456789abcdef'
let hex = '#'

for (let i = 0; i < 6; i++) {
  hex += hexCharacters[Math.floor(Math.random() * hexCharacters.length)]
}

console.log(hex)


// 3. Random RGB color
let r = Math.floor(Math.random() * 256)
let g = Math.floor(Math.random() * 256)
let b = Math.floor(Math.random() * 256)

console.log(`rgb(${r},${g},${b})`)


// 4. Countries in uppercase
let upperCountries = []

for (let country of countries) {
  upperCountries.push(country.toUpperCase())
}

console.log(upperCountries)


// 5. Countries length
let countryLengths = []

for (let country of countries) {
  countryLengths.push(country.length)
}

console.log(countryLengths)


// 6. Countries with abbreviation and length
let countryData = []

for (let country of countries) {
  countryData.push([
    country,
    country.substring(0, 3).toUpperCase(),
    country.length
  ])
}

// Add Iceland as required by the exercise
countryData.splice(9, 0, ['Iceland', 'ICE', 7])

console.log(countryData)


// 7. Countries containing "land"
let landCountries = countries.filter(country =>
  country.includes('land')
)

if (landCountries.length > 0) {
  console.log(landCountries)
} else {
  console.log('All these countries are without land')
}


// 8. Countries ending with "ia"
let iaCountries = countries.filter(country =>
  country.endsWith('ia')
)

if (iaCountries.length > 0) {
  console.log(iaCountries)
} else {
  console.log('These are countries ends without ia')
}


// 9. Country with the biggest number of characters
let longestCountry = countries[0]

for (let country of countries) {
  if (country.length > longestCountry.length) {
    longestCountry = country
  }
}

console.log(longestCountry)


// 10. Countries containing only 5 characters
let fiveCharacterCountries = countries.filter(country =>
  country.length === 5
)

console.log(fiveCharacterCountries)


// 11. Longest word in webTechs
let longestWebTech = webTechs[0]

for (let tech of webTechs) {
  if (tech.length > longestWebTech.length) {
    longestWebTech = tech
  }
}

console.log(longestWebTech)


// 12. webTechs with their lengths
let webTechData = []

for (let tech of webTechs) {
  webTechData.push([tech, tech.length])
}

console.log(webTechData)


// 13. Create MERN acronym
let acronym = ''

for (let tech of mernStack) {
  acronym += tech[0]
}

console.log(acronym)


// 14. Iterate through array
let technologies = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Redux',
  'Node',
  'Express',
  'MongoDB'
]

for (let tech of technologies) {
  console.log(tech)
}


// 15. Reverse fruit array without reverse()
let fruits = ['banana', 'orange', 'mango', 'lemon']
let reversedFruits = []

for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i])
}

console.log(reversedFruits)


// 16. Print all elements of fullStack
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for (let stack of fullStack) {
  for (let item of stack) {
    console.log(item.toUpperCase())
  }
}


// =========================
// LEVEL 3
// =========================

// 1. Copy countries array without mutation
let countriesCopy = [...countries]

console.log(countriesCopy)


// 2. Sort copied countries array
let sortedCountries = [...countries]

sortedCountries.sort()

console.log(sortedCountries)
console.log(countries)


// 3. Sort webTechs and mernStack
let sortedWebTechs = [...webTechs].sort()
let sortedMernStack = [...mernStack].sort()

console.log(sortedWebTechs)
console.log(sortedMernStack)


// 4. Countries containing "land"
let countriesWithLand = countries.filter(country =>
  country.includes('land')
)

console.log(countriesWithLand)


// 5. Country with highest number of characters
let highestCharacterCountry = countries[0]

for (let country of countries) {
  if (country.length > highestCharacterCountry.length) {
    highestCharacterCountry = country
  }
}

console.log(highestCharacterCountry)


// 6. Countries containing "land"
let landCountriesAgain = countries.filter(country =>
  country.includes('land')
)

console.log(landCountriesAgain)


// 7. Countries containing exactly four characters
let fourCharacterCountries = countries.filter(country =>
  country.length === 4
)

console.log(fourCharacterCountries)


// 8. Countries containing two or more words
let countriesWithTwoOrMoreWords = countries.filter(country =>
  country.split(' ').length >= 2
)

console.log(countriesWithTwoOrMoreWords)


// 9. Reverse countries and capitalize each country
let reversedCapitalCountries = []

for (let i = countries.length - 1; i >= 0; i--) {
  reversedCapitalCountries.push(countries[i].toUpperCase())
}

console.log(reversedCapitalCountries)