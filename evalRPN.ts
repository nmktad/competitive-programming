function evalRPN(tokens: string[]): number {
  let stack: number[] = [];
  let a: number = 0,
    b: number = 0;

  const evaluate = {
    "+": () => a + b,
    "-": () => a - b,
    "*": () => a * b,
    "/": () => ~~(a / b),
  };

  for (let token of tokens) {
    if (evaluate[token]) {
      (b = stack.pop()!), (a = stack.pop()!);
      stack.push(evaluate[token]());
    } else stack.push(~~token);
  }

  return stack[0];
}
