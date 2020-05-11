var EXAM_WEIGHT = 0.65;
var EXERCISE_WEIGHT = 0.35;

var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  // loop through all students
  // calculate final grade and map results

  return {
    studentGrades: calculateStudentResults(scores),
    exams: calculateClassResults(scores),
  }
}

function calculateStudentResults(scores) {
  return Object.keys(scores).map((student) => {
    var score = calculateStudentScore(scores[student].scores);
    var grade = calculateStudentGrade(score);
    return `${score} (${grade})`
  });
}

function calculateStudentScore(scores) {
  var examAverage = calculateAverages(scores.exams);
  var exerciseAverage = calculateSum(scores.exercises);

  return Number(Math.round(examAverage * EXAM_WEIGHT + exerciseAverage * EXERCISE_WEIGHT).toFixed(1));
}

function calculateSum(scoreArray) {
  return Math.round(scoreArray.reduce((sum, curr) => {
    return sum + curr;
  }));
}

function calculateAverages(scoreArray) {
  return calculateSum(scoreArray) / scoreArray.length;
}

function calculateStudentGrade(score) {
  if (score >= 93) {
    return 'A';
  } else if (score >= 85) {
    return 'B';
  } else if (score >= 77) {
    return 'C';
  } else if (score >= 69) {
    return 'D';
  } else if (score >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function calculateClassResults(scores) {
  var allExams = [];
  var students = Object.keys(scores);

  // assumes there is a 'student1' available
  for (var i = 0; i < scores.student1.scores.exams.length; i++) {
    var examResults = [];
    for (student of students) {
      examResults.push(scores[student].scores.exams[i]);
    }
    allExams.push({
      average: calculateAverages(examResults),
      minimum: calculateMinimum(examResults),
      maximum: calculateMaximum(examResults),
    })
  }

  return allExams;
}

function calculateMinimum(scoreArray) {
  return scoreArray.reduce((min, value) => {
    return value < min ? value : min;
  });
}

function calculateMaximum(scoreArray) {
  return scoreArray.reduce((max, value) => {
    return value > max ? value : max;
  });
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: ['87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)'],
//   exams: [{
//       average: 75.6,
//       minimum: 50,
//       maximum: 100
//     },
//     {
//       average: 86.4,
//       minimum: 70,
//       maximum: 100
//     },
//     {
//       average: 87.6,
//       minimum: 60,
//       maximum: 100
//     },
//     {
//       average: 91.8,
//       minimum: 80,
//       maximum: 100
//     },
//   ],
// }