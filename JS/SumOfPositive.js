// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

console.log(positiveSum([]));
// console.log(positiveSum([-1, 2, 3, 4, -5]));

function positiveSum(arrNum) {
  if (arrNum.length == 0) {
    return 0;
  }

  let result = 0;
  for (let num of arrNum) {
    if (num > 0) {
      result += num;
    }
  }

  return result;
}
