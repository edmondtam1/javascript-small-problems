function createStudent(name, year) {
  var student = {};
  student.name = name;
  student.year = year;
  student.info = function() {
    return `${this.name} is a ${this.year} year student`;
  };
  student.courses = [];
  student.listCourses = function() {
    return this.courses;
  };
  student.addCourse = function(course) {
    this.courses.push(course);
  };
  student.addNote = function(code, note) {
    var courseIndex = this.getCourseIndex(code);
    if (courseIndex !== undefined) {
      if (!this.courses[courseIndex].note) {
        this.courses[courseIndex].note = [];
      }
      this.courses[courseIndex].note.push(note);
    };
  };
  student.viewNotes = function() {
    var hasNotes = this.courses.filter(course => {
      return Object.keys(course).includes('note');
    });
    return hasNotes.map(course => {
      return `${course.name}: ${course.note.join('; ')}`;
    }).join('\n');
  };
  student.updateNote = function(code, newNote) {
    var courseIndex = this.getCourseIndex(code);
    if (courseIndex !== undefined) {
      this.courses[courseIndex].note = [newNote];
    }
  };
  student.addGrade = function(courseCode, grade) {
    var courseIndex = this.getCourseIndex(courseCode);
    if (courseIndex !== undefined) {
      this.courses[courseIndex].grade = grade;
    };
  };
  student.getCourseIndex = function(code) {
    var courseIndex;
    var i;
    for (i = 0; i < this.courses.length; i++) {
      if (this.courses[i].code === code) {
        courseIndex = i;
        break;
      }
    }
    return courseIndex;
  };
  return student;
}

// foo = createStudent('Foo', '3rd');
// foo.addCourse({
//   name: 'Math',
//   code: 101,
//   grade: 95,
// });
// foo.addCourse({
//   name: 'Advanced Math',
//   code: 102,
//   grade: 90,
// });
// foo.addCourse({
//   name: 'Physics',
//   code: 202,
// });

// bar = createStudent('Bar', '1st');
// bar.addCourse({
//   name: 'Math',
//   code: 101,
//   grade: 91,
// });

// qux = createStudent('Qux', '2nd');
// qux.addCourse({
//   name: 'Math',
//   code: 101,
//   grade: 93,
// });
// qux.addCourse({
//   name: 'Advanced Math',
//   code: 102,
//   grade: 90,
// });

var school = {
  students: [],
  addStudent: function(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      var student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },

  enrollStudent: function(name, course) {
    var studentIndex = this.getStudentIndex(name);

    if (studentIndex !== undefined) {
      this.students[studentIndex].addCourse(course);
    };
  },

  addGrade: function(name, courseCode, grade) {
    var studentIndex = this.getStudentIndex(name);

    if (studentIndex !== undefined) {
      this.students[studentIndex].addGrade(courseCode, grade);
    };
  },

  getStudentIndex: function(name) {
    var studentIndex;
    var i;
    for (i = 0; i < this.students.length; i++) {
      if (this.students[i].name === name) {
        studentIndex = i;
        break;
      };
    }
    return studentIndex;
  },

  getReportCard: function(name) {
    var studentIndex = this.getStudentIndex(name);
    if (studentIndex === undefined) {
      console.log('Student is not enrolled.');
      return;
    };
    var courses = this.students[studentIndex].courses;
    if (courses) {
      var i;
      console.log(`*** ${name}'s courses ***`)
      for (i = 0; i < courses.length; i++) {
        var course = courses[i];
        var grade = course.grade === undefined ? 'In Progress' : course.grade;
        console.log(`${course.name}: ${grade}`);
      };
    } else {
      console.log(`Student ${name} is not enrolled in any courses.`);
    }
  },

  courseReport: function(courseName) {
    var courseGrades = this.students.map(student => {
      var course = student.listCourses().filter(course => {
        return course.name === courseName;
      });

      if (course[0] !== undefined) {
        return {
          name: student.name,
          grade: course[0].grade
        };
      } else {
        return false;
      }
    });

    var total = 0;
    var num = 0;
    console.log(`=${courseName} Grades=`);
    courseGrades.forEach(studentCourse => {
      if (studentCourse.grade !== undefined) {
        console.log(`${studentCourse.name}: ${studentCourse.grade}`);
        total += studentCourse.grade;
        num += 1;
      }
    });
    if (num > 0) {
      console.log('---');
      console.log(`Course Average: ${Math.round(total / num)}`)
    } else {
      console.log(`No students enrolled in ${courseName}`);
    }
  },
};

var math = {
  name: 'Math',
  code: 101,
};
var advancedMath = {
  name: 'Advanced Math',
  code: 102,
};
var physics = {
  name: 'Physics',
  code: 202,
};

school.addStudent('foo', '3rd');
school.enrollStudent('foo', {
  ...math
});
school.enrollStudent('foo', {
  ...advancedMath
});
school.enrollStudent('foo', {
  ...physics
});
school.addGrade('foo', 101, 95);
school.addGrade('foo', 102, 90);

school.addStudent('bar', '1st');
school.enrollStudent('bar', {
  ...math
});
school.addGrade('bar', 101, 91);

school.addStudent('qux', '2nd');
school.enrollStudent('qux', {
  ...math
});
school.enrollStudent('qux', {
  ...advancedMath
});
school.addGrade('qux', 101, 93);
school.addGrade('qux', 102, 90);

school.getReportCard('foo');
school.getReportCard('bar');
school.getReportCard('qux');

school.addStudent('non', '4th');
school.getReportCard('non');

school.addStudent('bad', '6th');
school.getReportCard('bad');

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');

var foo = 'foo';
// with `var` declaration, the variable is in the module scope
// and it is not added to the global object

bar = 'bar';
// without `var` declaration, the variable is in the global scope
// and added to the global object

console.log(global.foo); // => undefined
console.log(global.bar); // => bar