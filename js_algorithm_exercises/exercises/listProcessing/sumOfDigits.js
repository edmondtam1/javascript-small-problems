function sum(num) {
  return String(num).split('').reduce((sum, curr) => {
    return Number(sum) + Number(curr);
  });
}

console.log(
  sum(23), // 5
  sum(496), // 19
  sum(123456789), // 45
);