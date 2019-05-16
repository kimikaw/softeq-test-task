for (let i = 1; i <= 99; i++) {
  if (i % 21 === 0) {
    console.log("OpenSource");
  } else if (i % 7 === 0) {
    console.log("Source");
  } else if (i % 3 === 0) {
    console.log("Open");
  } else {
    console.log(i);
  }
}
