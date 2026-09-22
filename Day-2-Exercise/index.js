const output = [];

function show(title, value) {
  console.log(title, value);
  output.push(`<p><strong>${title}</strong> ${format(value)}</p>`);
}

function format(value) {
  if (Array.isArray(value)) {
    return `[${value.map(item => JSON.stringify(item)).join(", ")}]`;
  }

  if (value === null) {
    return "null";
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

// ==================== LEVEL 1 ====================

const challenge = "30 Days Of JavaScript";

const spaceSeparated = challenge.split(" ");

const becauseSentence =
  "You cannot end a sentence with because because because is a conjunction";

show("1. Challenge", challenge);

show("2. Length", challenge.length);

show("3. Uppercase", challenge.toUpperCase());

show("4. Lowercase", challenge.toLowerCase());

show("5. First word", challenge.substr(0, 2));

show("6. Phrase Days Of JavaScript", challenge.slice(3));

show("7. Contains Script", challenge.includes("Script"));

show("8. Split into an array", challenge.split(""));

show("9. Split at spaces", spaceSeparated);

show(
  "10. Companies array",
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", ")
);

show(
  "11. Replace JavaScript with Python",
  challenge.replace("JavaScript", "Python")
);

show("12. Character at index 15", challenge.charAt(15));

show(
  "13. Character code of J",
  challenge.charCodeAt(challenge.indexOf("J"))
);

show("14. First occurrence of a", challenge.indexOf("a"));

show("15. Last occurrence of a", challenge.lastIndexOf("a"));

show(
  "16. First occurrence of because",
  becauseSentence.indexOf("because")
);

show(
  "17. Last occurrence of because",
  becauseSentence.lastIndexOf("because")
);

show(
  "18. Search for because",
  becauseSentence.search("because")
);

show(
  "19. Trimmed string",
  " 30 Days Of JavaScript ".trim()
);

show(
  "20. Starts with 30 Days Of JavaScript",
  challenge.startsWith("30 Days Of JavaScript")
);

show(
  "21. Ends with 30 Days Of JavaScript",
  challenge.endsWith("30 Days Of JavaScript")
);

show(
  "22. All a characters",
  challenge.match(/a/gi)
);

show(
  "23. Concatenated string",
  "30 Days Of".concat(" ", "JavaScript")
);

show(
  "24. Repeated twice",
  challenge.repeat(2)
);

// ==================== LEVEL 2 ====================

show(
  "25. John Holmes quote",
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

show(
  "26. Mother Teresa quote",
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

const stringTen = "10";

show(
  "27. Is typeof '10' exactly equal to 10?",
  typeof stringTen === typeof 10 && Number(stringTen) === 10
);

const parsedNumber = parseFloat("9.8");

show(
  "28. Make parseFloat('9.8') equal to 10",
  Math.ceil(parsedNumber) === 10
);

show(
  "29. Is 'on' found in python and jargon?",
  "python".includes("on") && "jargon".includes("on")
);

show(
  "30. Is jargon in the sentence?",
  "I hope this course is not full of jargon.".includes("jargon")
);

show(
  "31. Random number from 0 to 100",
  Math.floor(Math.random() * 101)
);

show(
  "32. Random number from 50 to 100",
  Math.floor(Math.random() * 51) + 50
);

show(
  "33. Random number from 0 to 255",
  Math.floor(Math.random() * 256)
);

const javascriptWord = "JavaScript";

const randomCharacter =
  javascriptWord[Math.floor(Math.random() * javascriptWord.length)];

show(
  "34. Random character from JavaScript",
  randomCharacter
);

const pattern = `1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`;

show("35. Number pattern", pattern);

show(
  "36. Phrase because because because",
  becauseSentence.substr(31, 23)
);

// ==================== LEVEL 3 ====================

const loveSentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

const loveMatches = loveSentence.match(/love/gi) || [];

show(
  "37. Number of times love appears",
  loveMatches.length
);

const becauseMatches = becauseSentence.match(/because/gi) || [];

show(
  "38. Number of times because appears",
  becauseMatches.length
);

const messySentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tivat#e yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

const cleanSentence = messySentence
  .replace(/[^a-zA-Z0-9 ]/g, "")
  .replace(/\s+/g, " ")
  .trim();

const words = cleanSentence.toLowerCase().split(" ");

const wordCounts = {};

words.forEach(word => {
  wordCounts[word] = (wordCounts[word] || 0) + 1;
});

const mostFrequentWord = Object.entries(wordCounts).sort(
  (a, b) => b[1] - a[1]
)[0];

show(
  "39. Cleaned sentence",
  cleanSentence
);

show(
  "40. Most frequent word and count",
  `${mostFrequentWord[0]} (${mostFrequentWord[1]} times)`
);

const incomeText =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

const incomeNumbers = incomeText.match(/\d+/g).map(Number);

const annualIncome =
  incomeNumbers[0] * 12 +
  incomeNumbers[1] +
  incomeNumbers[2] * 12;

show(
  "41. Total annual income",
  `${annualIncome} euro`
);

// Display all results on the webpage

document.body.innerHTML = `
  <main>
    <h1>30 Days Of JavaScript - Day 2 Exercises</h1>

    <p>
      The answers are displayed below.
      You can also open the browser console to see the console.log() results.
    </p>

    <section>
      ${output.join("\n")}
    </section>
  </main>
`;

document.querySelectorAll("pre").forEach(pre => {
  pre.style.whiteSpace = "pre-wrap";
});
