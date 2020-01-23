// var scissorsId = 0;
// var scissorsName = 'Scissors';
// var scissorsStock = 8;
// var scissorsPrice = 10;

// var drillId = 1;
// var drillName = 'Cordless Drill';
// var drillStock = 15;
// var drillPrice = 45;

function createProduct(id, name, stock, price) {
  return {
    id: id,
    name: name,
    stock: stock,
    price: price,
    setPrice: function(newPrice) {
      if (newPrice < 0) {
        return 'Your negative price is invalid.'
      } else {
        this.price = newPrice;
      }
    },
    describe: function() {
      console.log(`=> ID: ${this.id}`);
      console.log(`=> Name: ${this.name}`);
      console.log(`=> Price: $${this.price}`);
      console.log(`=> Stock: ${this.stock}`);
    },
  }
}

var ruler = createProduct(2, 'Ruler', 10, 5);
var scissors = createProduct(0, 'Scissors', 8, 10);
var drill = createProduct(1, 'Cordless Drill', 15, 45);
var screwdriver = createProduct(3, 'Screwdriver', 20, 15);
ruler.describe();
scissors.describe();
drill.describe();
screwdriver.describe();