package main

import "fmt"

var prime = 8498810289638043367

func primeFactors() []int {
	factors, divisor, n := make([]int, 0), 2, prime

	for n >= 2 {
		if n%divisor == 0 {
			factors = append(factors, divisor)
			n = n / divisor
		} else {
			divisor++
		}
	}
	return factors
}

func main() {
	fmt.Println(fmt.Sprintf("%s", fmt.Sprint(primeFactors())))
}
