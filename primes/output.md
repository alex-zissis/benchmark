# Prime Factorization

### Algorithm
Given a prime number (N) find its factors.

**Pseudocode**
```
Input N
P = 2
Factors = []

Do While N >= 2
If N mod P = 0 Then
    Factors = Append(Factors, P)
    N = N / P
Else
    P = P + 1
End If
Loop
```

## Results

__All benchmarks run using the same 32-bit prime number__

`N = 8498810289638043367`

| Language   | Runtime               | Time (s) |
| ---------- | --------------------- | -------- |
| Javascript | NodeJS 17.6.0         | 214.92   |
| Go (run)   | Go 1.18               | 2.20     |
| Go (build) | Go 1.18               | 2.09     |
| Go (WASM)  | Go 1.18/NodeJs 17.6.0 | 9.17     |
| C          | clang 13.0.0          | 2.08     |
| Python     | Python 3.9            | 270.70   |
| C#         | dotnet 6.0.103        | 7.48     |

## Node
**214.92s**

```
❯  time node benchmark/primes/primes.js
[2556478979n, 3324420173n]
node benchmark/primes.js  214.92s user 1.68s system 99% cpu 3:37.64 total
```

## Go (runtime)
**2.20s**

```
❯  time go run benchmark/primes/primes.go
[2556478979, 3324420173]
go run benchmark/primes/primes.go  2.20s user 0.15s system 95% cpu 1.934 total
```

## Go (compiled)
**2.09s**

```
❯ go build && time ./out/primes.go.out
[2556478979 3324420173]
./out/primes.go.out  2.09s user 0.02s system 99% cpu 2.119 total
```

## Go (WASM)
**9.17s**

```
❯ time node primes.wasm.js
[2556478979 3324420173]
node primes.wasm.js  9.17s user 0.03s system 107% cpu 8.554 total
```

## C
**2.08s**
```
❯  gcc benchmarks/primes/primes.c -o benchmarks/primes/out/primes.c.out && benchmarks/primes/out/primes.c.out
[2556478979, 3324420173]
./benchmark/primes.out  2.08s user 0.00s system 99% cpu 2.087 total
```

## Python
**270.70s**

```
❯  python3.9 benchmarks/primes/primes.py
[2556478979, 3324420173]
python3.9 benchmark/primes.py  270.70s user 0.35s system 99% cpu 4:31.10 total
```

## C#
**7.48s**

```
❯ time dotnet run bin/Release/net6.0/primes.dll
[2556478979, 3324420173]
dotnet run bin/Release/net6.0/primes.dll  7.48s user 0.56s system 116% cpu 6.905 total
```