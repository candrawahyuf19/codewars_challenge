// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

console.log(disemvowel("This website is for losers LOL!"));

function disemvowel(str) {
  let vowels = "aiueoAIUEO";
  let result = "";

  for (let char of str) {
    let isVowel = false;

    for (let vowel of vowels) {
      if (char === vowel) {
        isVowel = true;
        break;
      }
    }

    if (!isVowel) {
      result += char;
    }
  }

  return result;
}
