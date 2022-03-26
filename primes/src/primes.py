prime = 8498810289638043367

def primeFactors(n):
    factors = []
    divisor = 2

    while n >= 2:
        if n % divisor == 0:
            factors.append(divisor)
            n = n / divisor
        else:
            divisor += 1

    return factors


factors = primeFactors(prime);

print(factors)