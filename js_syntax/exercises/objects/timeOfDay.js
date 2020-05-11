var MILLISECONDS_TO_MINUTES = 60000;
var MINUTES_IN_DAY = 1440;

function timeOfDay(num) {
  var date = new Date('1/1/2000 00:00');
  var newDate = new Date(date.getTime() + num * MILLISECONDS_TO_MINUTES);
  var hours = String(newDate.getHours()).padStart(2, '0');
  var minutes = String(newDate.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`
}

function afterMidnight(num) {
  var hours = Number(num.slice(0, 2));
  var minutes = Number(num.slice(3, 5));

  var date = new Date(2000, 1, 1);
  var newDate = new Date(2000, 1, 1, hours, minutes);

  return ((newDate - date) / MILLISECONDS_TO_MINUTES);
}

function beforeMidnight(num) {
  var hours = Number(num.slice(0, 2));
  var minutes = Number(num.slice(3, 5));

  var date = new Date(2000, 1, 2);
  var newDate = new Date(2000, 1, 1, hours, minutes);

  return ((date - newDate) / MILLISECONDS_TO_MINUTES) % MINUTES_IN_DAY;
}

console.log(
  timeOfDay(0), // "00:00"
  timeOfDay(-3), // "23:57"
  timeOfDay(35), // "00:35"
  timeOfDay(-1437), // "00:03"
  timeOfDay(3000), // "02:00"
  timeOfDay(800), // "13:20"
  timeOfDay(-4231), // "01:29"
);

console.log(
  afterMidnight('00:00'), // 0
  beforeMidnight('00:00'), // 0
  afterMidnight('12:34'), // 754
  beforeMidnight('12:34'), // 686
);