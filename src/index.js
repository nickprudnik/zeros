module.exports = function getZerosCount(number) {

  var c = 0;
  while ( number >= 1 && number <= Math.pow(10,8)) {
  number = Math.floor(number/5);
  c = c + number;
  }
  return c;
  // your implementation
}
