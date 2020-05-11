function letterPercentages(string) {
  if (string.length === 0) return undefined;
  var upper = (string.match(/[A-Z]/g) || []).length;
  var lower = (string.match(/[a-z]/g) || []).length;
  var neither = (string.match(/[^a-z]/gi) || []).length;
  var total = string.length;

  return {
    lowercase: (lower / total * 100).toFixed(2),
    uppercase: (upper / total * 100).toFixed(2),
    neither: (neither / total * 100).toFixed(2),
  }
}

console.log(
  letterPercentages('abCdef 123'),
  // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

  letterPercentages('AbCd +Ef'),
  // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

  letterPercentages('123'),
  // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

)