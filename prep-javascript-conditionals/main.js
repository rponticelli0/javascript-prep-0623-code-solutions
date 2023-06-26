//* Your JS goes in this file*//
const age = 34;
function isAdult(age) {
  if (age < 18) {
    console.log(false);
  } else {
    console.log(true);
  }
}
isAdult.call(age);

const student1Score = 89;
function didStudentPass(score) {
  if (student1Score > 70) {
    console.log(true);
  } else {
    console.log(false);
  }
}
didStudentPass(student1Score);

const student2Score = 100;
function gradeCalculator(score) {
  if (score < 60) {
    console.log('F');
  } else if (score < 70) {
    console.log('D');
  } else if (score < 80) {
    console.log('C');
  } else if (score < 90) {
    console.log('B');
  } else if (score < 100) {
    console.log('A');
  } else {
    console.log('A++');
  }
}
gradeCalculator(student2Score);

const season = 'spring';
function seasonMessenger(season) {
  if (season === 'summer') {
    console.log("it's hot today");
  } else if (season === 'spring') {
    console.log('the flowers are blooming');
  } else if (season === 'autumn') {
    console.log('the leaves are changing colors');
  } else if (season === 'winter') {
    console.log("it's cold today");
  } else {
    console.log('please enter a valid season');
  }
}
seasonMessenger(season);

const dayOfTheWeek = 'Thursday';
function dayDetector(dayOfTheWeek) {
  if ((dayOfTheWeek === 'Satruday') === 'Sunday') {
    console.log('Have a good weekend!');
  } else {
    console.log("It's a weekday!");
  }
}
dayDetector(dayOfTheWeek);
