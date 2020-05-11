var xhr = new XMLHttpRequest();

xhr.open('GET', 'htts://api.github.com/repos/rails/rails');
xhr.responseType = 'json';
xhr.addEventListener('load', function(e) {
  var data = xhr.response;
  console.log(xhr.status);
  console.log(data.open_issues);
});

xhr.addEventListener('error', function(e) {
  console.log('The request sux!');
});

xhr.send();