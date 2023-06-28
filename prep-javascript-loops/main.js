// create your loops here.
function whileLoop1() {
  let i = 0;
  const array = [];
  while (i < 10) {
    array.push(i);
    i++;
  }
  return array;
}

console.log('whileloop1 output', whileLoop1());

function whileLoop2() {
  let i = 0;
  const array = [];
  while (i <= 18) {
    array.push(i);
    i = i + 2;
  }
  return array;
}

console.log('whileloop1 output', whileLoop2());

function forLoop1() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}

console.log('forLoop output', forLoop1());

function forLoop2() {
  const array = [];
  for (let i = 100; i >= 0; i--) {
    console.log('Time till explosion', i);
    array.push(i);
  }
  return array;
}

console.log(forLoop2);
