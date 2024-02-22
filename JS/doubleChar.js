// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

console.log(doubleChar("abcd"));

function doubleChar(str) {
  let repeateString = "";

  for (let i = 0; i < str.length; i++) {
    repeateString += str[i] + str[i];
  }

  return repeateString;
}

function doubleChar(str) {
  let resultSplit = str
    .split("")
    .map((a) => a + a)
    .join("");

  console.log(resultSplit);
}
