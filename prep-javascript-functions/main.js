function addTwoNumbers(a, b) {
  return a + b;
}

const addTwoNumbersResults = addTwoNumbers(2, 2);

console.log('addTwoNumbers Exercise:', addTwoNumbersResults);

function convertHoursToMinutes(a) {
  return a * 60;
}

const convertHoursToMinutesResults = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResults);

function getGreeting() {
  const greeting = 'Hellow, World!';
  console.log(greeting);
}

getGreeting();

function addAndMultiplyBy5(a, b) {
  return (a + b) * b;
}

const addAndMultiplyBy5Results = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise', addAndMultiplyBy5Results);

function multiplyAddDivideBy5(a, b) {
  return (a * b) / 5;
}

const multiplyAddDivideBy5Results = multiplyAddDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', multiplyAddDivideBy5Results);

function subtractTwoNumbers(a, b) {
  return a - b;
}

const subtractTwoNumbersResults = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbe Exercise:', subtractTwoNumbersResults);

function getCircleCircumference(a) {
  return 2 * 3.14 * a;
}

const getCircleCircumferenceResults = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', getCircleCircumferenceResults);

function getFullName(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  return fullName;
}

const rp = getFullName('Ryan', 'Ponticelli');
console.log('getFullName Exercise:', rp);

function cube(a) {
  return a * a * a;
}

const cubeRults = cube(5);
console.log('cube Exercise:', cubeRults);
