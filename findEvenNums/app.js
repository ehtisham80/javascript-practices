function findEvenNumbers(arr_num, num) {
  let result = 0;
  for (let i = 0; i < arr_num.length; i++) {
    if (arr_num[i] % 2 === 0 && arr_num[i] !== num) {
      result++;
    }
    if (arr_num[i] === num) {
      return result;
    }
  }
  return -1;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8], 5));
console.log(findEvenNumbers([1, 3, 5, 6, 7, 8], 6));
