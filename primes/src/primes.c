#include <stdio.h>

long * primeFactors(long n) {
    static long factors[2] = {0, 0};
    long divisor = 2;

    int idx = 0;
    while (n >= 2) {
        if (n % divisor == 0) {
            factors[idx] = divisor;
            idx = 1;
            n = n / divisor;
        } else {
            divisor++;
        }
    }

    return factors;
}

int main() {
    long prime = 8498810289638043367;
    
    long *ptr;
    
    ptr = primeFactors(prime);

    printf("[%ld, %ld]\n", *(ptr), *(ptr + 1));

    return 0;
}

