document.addEventListener('DOMContentLoaded', function() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com/products');

  request.addEventListener('load', function(event) {
    var store = document.getElementById('store');
    store.innerHTML = request.response;
  });

  request.send();
  store.addEventListener('click', function(event) {
    var target = event.target;
    if (target.tagName !== 'A') {
      return;
    }

    event.preventDefault();

    var request = new XMLHttpRequest();
    request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com' + target.getAttribute('href'));

    request.addEventListener('load', function(event) {
      store.innerHTML = request.response;
      var form = document.querySelector('form');

      form.addEventListener('submit', function(event) {
        event.preventDefault();

        var data = new FormData(form);

        var request = new XMLHttpRequest();
        request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com' + form.getAttribute('action'));

        request.addEventListener('load', function(event) {
          if (request.status === 201) {
            console.log('The data was changed: ' + request.responseText);
          }
        });

        request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

        request.send(data);
      });
    });

    request.send();
  });


});