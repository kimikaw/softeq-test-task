function average(min, max) {
  return Math.floor((max + min) / 2);
}

function randomFromRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function verify(guess) {
  if (guess === solution) {
    return 0;
  } else if (solution < guess) {
    return -1;
  } else if (solution > guess) {
    return 1;
  }
}

let min = 1;
let max = 1000000;
let solution = randomFromRange(min, max);
let guess = average(min, max);

function binarySearch() {
  let count = 0;
  while (verify(guess) !== 0) {
    if (count === 50) {
      break;
    }
    count++;
    if (verify(guess) === -1) {
      max = guess - 1;
    } else if (verify(guess) === 1) {
      min = guess + 1;
    }

    guess = average(min, max);
    console.log("Guess: ", guess);
    console.log("Counter", count);
  }
}

binarySearch();
