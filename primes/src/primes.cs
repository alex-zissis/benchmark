using System;
using System.Collections.Generic;

public static class Program {
    private static List<long> PrimeFactors(long n)
    {
        var factors = new List<long>();
        long divisor = 2;

        while (n >= 2) {
            if (n % divisor == 0) {
                factors.Add(divisor);
                n = n / divisor;
            } else {
                divisor++;
            }
        }
        
        return factors;
    }

    public static void Main(string[] args)
    {
        long prime = 8498810289638043367;

        var factors = PrimeFactors(prime);
        Console.WriteLine("[" + string.Join(", ", factors) + "]");
    }
}