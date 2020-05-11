var subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    rollCall('Math', students);
  };
}

var mathRollCall = makeMathRollCall();
console.log(mathRollCall(subjects['Math']));
// => Math:
// => Fatima
// => Gary
// => Susan

(function(number) {
  for (var i = 0; i < number; i += 1) {
    console.log(i);
  }
})(100);