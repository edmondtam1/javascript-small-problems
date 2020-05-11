// Exercise 1

var today = new Date();

// Exercise 2

// console.log(`Today's day is: ${today.getDay()}`);

// Exercise 3/4

var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var month = formattedMonth(today);
var dayOfWeek = today.getDay();
var dateSuffix = getSuffix(today.getDate());

function getSuffix(day) {
  day = String(day);
  if (day[0] === '1' && day.length == 2) {
    return day + 'th';
  }

  if (day[day.length - 1] === '1') {
    return day + 'st';
  } else if (day[day.length - 1] === '2') {
    return day + 'nd';
  } else if (day[day.length - 1] === '3') {
    return day + 'rd';
  } else {
    return day + 'th';
  }
}

function formattedMonth(date) {
  return months[date.getMonth() + 1];
}

function formattedDay(date) {
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  return `Today's day is ${formattedDay(date)}, ${formattedMonth(date)} ${getSuffix(date.getDate())}`;
}

console.log(formattedDate(today));
console.log(`${today.getFullYear()} and ${today.getYear()}`);
console.log(today.getTime());

// Exercise 11

var tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
console.log(formattedDate(tomorrow));

// Exercise 12

var nextWeek = new Date(today.getTime());

console.log(today === nextWeek);
console.log(today.toDateString() === nextWeek.toDateString());

// Exercise 13

nextWeek.setDate(nextWeek.getDate() + 7);
console.log(today.toDateString() === nextWeek.toDateString());

// Exercise 14

function formatTime(date) {
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
}

console.log(formatTime(nextWeek));
console.log(formatTime(new Date(2013, 2, 1, 1, 10)));