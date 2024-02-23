// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

console.log(solution("abcde", "cde"));
console.log(solution2("abcde", "abc"));

function solution(str, ending) {
  return str.endsWith(ending);
}

function solution2(str, ending) {
  if (ending.length > str.length) {
    return false;
  }

  for (let i = 0; i < ending.length; i++) {
    if (ending[ending.length - 1 - i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
