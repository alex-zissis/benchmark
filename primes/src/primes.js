const prime = 8498810289638043367n;

function primeFactors(n) {
  const factors = [];
  let divisor = 2n;

  while (n >= 2n) {
    if (n % divisor == 0n) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

const factors = primeFactors(prime);

console.log(factors)