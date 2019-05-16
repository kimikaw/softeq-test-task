const regex = /Softeq.*#rules|#rules.*Softeq/;
const test = "321 123#rules312 2Softeq122#rules";
const test2 = "#eee333 llll Softeq#rules";
console.log(test2.match(regex));
