var item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    var discount = this.price * percent / 100;

    price = this.price - discount;

    return price;
  },
};

console.log(item.discount(20));
console.log(item.discount(50));
console.log(item.discount(25));