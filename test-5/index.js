const URL = "https://jsonplaceholder.typicode.com/posts";

async function getObjectWithIDFive() {
  const response = await fetch(URL);
  const json = await response.json();
  const result = json.filter(object => object.id === 5);
  return result[0];
}

async function outputAsyncToConsole() {
  const resolvedPrommise = await getObjectWithIDFive();
  console.log(resolvedPrommise);
}

outputAsyncToConsole();
