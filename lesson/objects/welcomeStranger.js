function welcomeStranger(arr, obj) {
  console.log(`Hello, ${arr.join(' ')}! Nice to have a ${obj.title} ${obj.occupation} around!`);
}

welcomeStranger(['John', 'Q', 'Doe'], {
  title: 'Master',
  occupation: 'Plumber'
});