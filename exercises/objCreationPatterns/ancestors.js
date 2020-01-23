// Object.prototype.ancestors = function() {
//   var result = [];
//   var currentObj = Object.getPrototypeOf(this);
//   while (currentObj && currentObj.name !== undefined) {
//     result.push(currentObj.name);
//     currentObj = Object.getPrototypeOf(currentObj);
//   }
//   result.push('Object.prototype');
//   return result;
// }

Object.prototype.ancestors = function() {
  var ancestor = Object.getPrototypeOf(this);

  if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
    return [ancestor.name].concat(ancestor.ancestors());
  }

  return ['Object.prototype'];
}

// name property added to make objects easier to identify
var foo = {
  name: 'foo'
};
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

console.log(
  qux.ancestors(), // returns ['baz', 'bar', 'foo', 'Object.prototype']
  baz.ancestors(), // returns ['bar', 'foo', 'Object.prototype']
  bar.ancestors(), // returns ['foo', 'Object.prototype']
  foo.ancestors(), // returns ['Object.prototype']
);