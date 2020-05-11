// document.addEventListener('DOMContentLoaded', function() {
//   var xhr = new XMLHttpRequest();

//   xhr.open('GET', 'http://localhost:3000/api/schedules');
//   xhr.timeout = 5000;
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', function(e) {
//     var schedules = xhr.response;
//     var staff = {};
//     var result = [];

//     if (schedules.length > 0) {
//       schedules.forEach(function(schedule) {
//         var key = 'staff ' + String(schedule.staff_id);
//         if (!staff.key) {
//           staff[key] = 0;
//         }

//         staff[key]++;
//       });

//       Object.keys(staff).forEach(function(key) {
//         result.push(key + ': ' + staff[key]);
//       });

//       return result.join('\n');
//     } else {
//       alert('There are no schedules to report.');
//     }
//   });

//   xhr.addEventListener('timeout', function(e) {
//     alert('It is taking longer than usual, please try again later.');
//   });

//   xhr.addEventListener('loadend', function(e) {
//     alert('The request has completed.');
//   });

//   xhr.send();
// });