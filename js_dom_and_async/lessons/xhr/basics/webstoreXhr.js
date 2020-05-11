var req = new XMLHttpRequest();
req.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
req.setRequestHeader('Content-Type', 'application/json');
req.setRequestHeader('Authorization', 'token AUTH_TOKEN');

var data = {
  name: 'Bananas',
  sku: 'Ban001',
  price: 250,
}

req.send(JSON.stringify(data));