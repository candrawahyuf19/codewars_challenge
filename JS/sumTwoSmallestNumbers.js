// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
// No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));

function sumTwoSmallestNumbers(numbers) {
  let smallest1 = Infinity;
  let smallest2 = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest1) {
      smallest2 = smallest1;
      smallest1 = numbers[i];
    } else if (numbers[i] < smallest2) {
      smallest2 = numbers[i];
    }
  }

  return smallest1 + smallest2;
}
