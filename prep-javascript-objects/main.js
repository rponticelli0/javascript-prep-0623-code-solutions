const ryan = {
  firstName: 'Ryan',
  lastName: 'Ponticelli',
  hobby: 'Gaming',
};

const fullName = ryan.firstName + ' ' + ryan.lastName;

console.log("The person's name is: ", fullName + '.');

ryan.job = 'Physical Therapiest Assistant';

console.log("The person's current jon is: " + ryan.job + '.');

ryan['previousJob'] = 'Student';

console.log("The person's previous job is: " + ryan['previousJob'] + '.');

console.log('The complete person objects: ', ryan);
