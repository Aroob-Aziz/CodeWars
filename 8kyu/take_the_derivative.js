function derive(coefficient, exponent) {
  const mul = coefficient * exponent;
  const sub = exponent - 1;
  return `"${mul}x^${sub}"`;
}

console.log(derive(7, 8));
