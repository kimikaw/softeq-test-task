const listOfStrings = ["1", "a", "25", "13.1", "-6"];

function sumOfIntegers(listOfStrings) {
  const sum = listOfStrings
    .filter(string => string % 1 === (0 || -0))
    .reduce((prev, current) => +current + +prev);

  return sum;
}

console.log(sumOfIntegers(listOfStrings));
