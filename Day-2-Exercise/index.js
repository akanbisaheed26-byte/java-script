// ==================== LEVEL 1 ====================

let challenge = "30 Days Of JavaScript";

console.log("1. Challenge:", challenge);

console.log("2. Length:", challenge.length);

console.log("3. Uppercase:", challenge.toUpperCase());

console.log("4. Lowercase:", challenge.toLowerCase());

console.log("5. First word:", challenge.substring(0, 2));

console.log("6. Phrase Days Of JavaScript:", challenge.substring(3));

console.log("7. Does it contain Script?:", challenge.includes("Script"));

console.log("8. Split into an array:", challenge.split(""));

console.log("9. Split at spaces:", challenge.split(" "));

let companies =
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log("10. Companies array:", companies.split(", "));

console.log(
  "11. Replace JavaScript with Python:",
  challenge.replace("JavaScript", "Python")
);

console.log(
  "12. Character at index 15:",
  challenge.charAt(15)
);

console.log(
  "13. Character code of J:",
  challenge.charCodeAt(challenge.indexOf("J"))
);

console.log(
  "14. First occurrence of a:",
  challenge.indexOf("a")
);

console.log(
  "15. Last occurrence of a:",
  challenge.lastIndexOf("a")
);

let sentence =
  "You cannot end a sentence with because because because is a conjunction";

console.log(
  "16. First occurrence of because:",
  sentence.indexOf("because")
);

console.log(
  "17. Last occurrence of because:",
  sentence.lastIndexOf("because")
);

console.log(
  "18. Search for because:",
  sentence.search("because")
);

console.log(
  "19. Trimmed string:",
  " 30 Days Of JavaScript ".trim()
);

console.log(
  "20. Starts with 30 Days Of JavaScript:",
  challenge.startsWith("30 Days Of JavaScript")
);

console.log(
  "21. Ends with 30 Days Of JavaScript:",
  challenge.endsWith("30 Days Of JavaScript")
);

console.log(
  "22. All the letter a characters:",
  challenge.match(/a/gi)
);

console.log(
  "23. Concatenated string:",
  "30 Days Of".concat(" ", "JavaScript")
);

console.log(
  "24. Repeated twice:",
  challenge.repeat(2)
);


// ==================== LEVEL 2 ====================

console.log(
  "25. John Holmes quote:",
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
  "26. Mother Teresa quote:",
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

let stringNumber = "10";

console.log(
  "27. Is typeof '10' exactly equal to 10?:",
  Number(stringNumber) === 10
);

let number = parseFloat("9.8");

console.log(
  "28. Is parseFloat('9.8') equal to 10?:",
  Math.ceil(number) === 10
);

console.log(
  "29. Is 'on' found in both python and jargon?:",
  "python".includes("on") && "jargon".includes("on")
);

console.log(
  "30. Is jargon in the sentence?:",
  "I hope this course is not full of jargon.".includes("jargon")
);

console.log(
  "31. Random number between 0 and 100:",
  Math.floor(Math.random() * 101)
);

console.log(
  "32. Random number between 50 and 100:",
  Math.floor(Math.random() * 51) + 50
);

console.log(
  "33. Random number between 0 and 255:",
  Math.floor(Math.random() * 256)
);

let javascript = "JavaScript";

let randomIndex = Math.floor(Math.random() * javascript.length);

console.log(
  "34. Random character from JavaScript:",
  javascript[randomIndex]
);

console.log(
  `35. Number pattern:
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`
);

console.log(
  "36. Phrase because because because:",
  sentence.substring(31, 54)
);


// ==================== LEVEL 3 ====================

let loveSentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

let loveWords = loveSentence.match(/love/gi);

console.log(
  "37. Number of times love appears:",
  loveWords.length
);

let becauseWords = sentence.match(/because/gi);

console.log(
  "38. Number of times because appears:",
  becauseWords.length
);

let messySentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tivat#e yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let cleanSentence = messySentence
  .replace(/[^a-zA-Z0-9 ]/g, "")
  .replace(/\s+/g, " ")
  .trim();

console.log("39. Cleaned sentence:", cleanSentence);

let words = cleanSentence.toLowerCase().split(" ");

let wordCount = {};

words.forEach(function (word) {
  if (wordCount[word]) {
    wordCount[word]++;
  } else {
    wordCount[word] = 1;
  }
});

let mostFrequentWord = Object.keys(wordCount).sort(function (a, b) {
  return wordCount[b] - wordCount[a];
})[0];

console.log(
  "40. Most frequent word:",
  mostFrequentWord,
  "appears",
  wordCount[mostFrequentWord],
  "times"
);

let incomeSentence =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let incomeNumbers = incomeSentence.match(/\d+/g).map(Number);

let totalAnnualIncome =
  incomeNumbers[0] * 12 +
  incomeNumbers[1] +
  incomeNumbers[2] * 12;

console.log(
  "41. Total annual income:",
  totalAnnualIncome + " euro"
);
