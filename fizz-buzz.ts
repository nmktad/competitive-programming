function fizzBuzz(n: number): string[] {
  const fizzArray: string[] = [];

  for (let num = 1; num <= n; num++) {
    if (num % 3 === 0) {
      if (num % 5 === 0) {
        fizzArray.push("FizzBuzz");
        continue;
      }

      fizzArray.push("Fizz");
    } else if (num % 5 === 0) {
      fizzArray.push("Buzz");
    } else {
      fizzArray.push(`${num}`);
    }
  }

  return fizzArray;
}
