function addTwoNumbers(a, b) {
  return a + b;
}

var addTwoNumbersResults = addTwoNumbers(2, 2);

console.log('addTwoNumbers Exercise:', addTwoNumbersResults);

function convertHoursToMinutes(a) {
  return a * 60;
}

var convertHoursToMinutesResults = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResults);

function getGreeting() {
  var greeting = 'Hellow, World!';
  console.log(greeting);
}

getGreeting();

function addAndMultiplyBy5(a, b) {
  return (a + b) * b;
}

var addAndMultiplyBy5Results = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise', addAndMultiplyBy5Results);

function multiplyAddDivideBy5(a, b) {
  return (a * b) / 5;
}

var multiplyAddDivideBy5Results = multiplyAddDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', multiplyAddDivideBy5Results);

function subtractTwoNumbers(a, b) {
  return a - b;
}

var subtractTwoNumbersResults = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbe Exercise:', subtractTwoNumbersResults);

function getCircleCircumference(a) {
  return 2 * 3.14 * a;
}

var getCircleCircumferenceResults = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', getCircleCircumferenceResults);

function getFullName(firstName, lastName) {
  var fullName = firstName + ' ' + lastName;
  return fullName;
}

var rp = getFullName('Ryan', 'Ponticelli');
console.log('getFullName Exercise:', rp);

function cube(a) {
  return a * a * a;
}

var cubeRults = cube(5);
console.log('cube Exercise:', cubeRults);
