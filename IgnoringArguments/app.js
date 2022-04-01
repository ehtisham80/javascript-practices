
const ArrayIgnoringValues =
  (fn, n) =>
  (...args) =>
    fn(...args.slice(0, n));
const firstTwoMax = ArrayIgnoringValues(Math.max, 2);

console.log([[2, 6, "a"], [8, 4, 6], [10]].map((x) => firstTwoMax(...x)));
