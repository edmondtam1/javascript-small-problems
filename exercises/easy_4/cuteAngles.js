var MINUTES_IN_DEGREES = 60;
var SECONDS_IN_MINUTES = 60;

function dms(angle) {
  var degrees;
  var minutes;
  var seconds;

  while (angle < 0) angle += 360;
  angle = angle % 360;
  degrees = Math.floor(angle);
  [minutes, seconds] = calcMinutesAndSeconds(angle - degrees);

  return `${String(degrees)}°\
${String(minutes).padStart(2, '0')}'${String(seconds).padStart(2, '0')}"`;
}

function calcMinutesAndSeconds(remainder) {
  var minutes;
  var seconds;

  minutes = remainder * MINUTES_IN_DEGREES;
  seconds = (minutes % 1) * SECONDS_IN_MINUTES;

  return [Math.floor(minutes), Math.floor(seconds)];
}

console.log(
  dms(30), // 30°00'00"
  dms(76.73), // 76°43'48"
  dms(254.6), // 254°35'59"
  dms(93.034773), // 93°02'05"
  dms(0), // 0°00'00"
  dms(360), // 360°00'00" or 0°00'00"
  dms(-1), // -1°00'00"
  dms(400), // 400°00'00"
  dms(-40), // -40°00'00"
  dms(-420), // 420°00'00"
);