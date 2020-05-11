function Person(first, last, age, gender) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return `${this.first} ${this.last}`;
};

Person.prototype.eat = function() {
  console.log('Eating!');
};

Person.prototype.communicate = function() {
  console.log('Communicating as you do...');
};

Person.prototype.sleep = function() {
  console.log('Snoozeru');
};

function Doctor(first, last, age, gender, specialization) {
  Person.call(this, first, last, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);

Doctor.prototype.diagnose = function() {
  console.log('You appear to have a problem...');
};

Doctor.prototype.constructor = Doctor;

function Professor(first, last, age, gender, subject) {
  Person.call(this, first, last, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);

Professor.prototype.teach = function() {
  console.log("I'm teaching kids!");
};

Professor.prototype.constructor = Professor;

function Student(first, last, age, gender, degree) {
  Person.call(this, first, last, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.study = function() {
  console.log('Gotta get extra credits!');
};

Student.prototype.constructor = Student;

function GraduateStudent(first, last, age, gender, degree, graduateDegree) {
  Student.call(this, first, last, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);

GraduateStudent.prototype.research = function() {
  console.log('Get that postdoc position!');
};

GraduateStudent.prototype.constructor = GraduateStudent;

var professional = {
  invoice: function() {
    console.log(this.fullName() + ' is being billed.');
  },

  payTax: function() {
    console.log(this.fullName() + ' is paying taxes.');
  },
}

function extend(obj, mixin) {
  var methods = Object.keys(mixin);
  methods.forEach(method => {
    obj[method] = delegate(obj, mixin, method);
  });

  return obj;
}

function delegate(callingObject, mixinObject, methodName) {
  return function(...args) {
    mixinObject[methodName].call(callingObject, args)
  }
}

// test cases

var person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person); // logs true
person.eat(); // logs 'Eating'
person.communicate(); // logs 'Communicating'
person.sleep(); // logs 'Sleeping'
console.log(person.fullName()); // logs 'foo bar'

var doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), professional);
console.log(doctor instanceof Person); // logs true
console.log(doctor instanceof Doctor); // logs true
doctor.eat(); // logs 'Eating'
doctor.communicate(); // logs 'Communicating'
doctor.sleep(); // logs 'Sleeping'
console.log(doctor.fullName()); // logs 'foo bar'S
doctor.diagnose(); // logs 'Diagnosing'

var professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), professional);
console.log(professor instanceof Person); // logs true
console.log(professor instanceof Professor); // logs true
professor.eat(); // logs 'Eating'
professor.communicate(); // logs 'Communicating'
professor.sleep(); // logs 'Sleeping'
console.log(professor.fullName()); // logs 'foo bar'
professor.teach(); // logs 'Teaching'

doctor.invoice(); // logs 'foo bar is Billing customer'
doctor.payTax(); // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice(); // logs 'foo bar is Asking customer to pay'
professor.invoice(); // logs 'foo bar is Asking customer to pay'
professor.payTax(); // logs 'foo bar Paying taxes

var graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat(); // logs 'Eating'
graduateStudent.communicate(); // logs 'Communicating'
graduateStudent.sleep(); // logs 'Sleeping'
console.log(graduateStudent.fullName()); // logs 'foo bar'
graduateStudent.study(); // logs 'Studying'
graduateStudent.research(); // logs 'Researching'