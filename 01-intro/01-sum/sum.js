function sum(a, b) {
  if (!Number.isFinite(a + b)) {
    throw new TypeError('one or more arguments is not a number');
  }
  return a + b;
}

module.exports = sum;
