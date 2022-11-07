function reverseParentheses(s: string): string {
  const stack: number[] = [];

  function reverse(A: string[], l: number, h: number) {
    if (l < h) {
      let ch = A[l];
      A[l] = A[h];
      A[h] = ch;
      reverse(A, l + 1, h - 1);
    }
  }

  for (let i = 0; i < s.length; i++)
    {
      if (s[i] == '(')
      {
        stack.push(i);
      }
        
      else if (s[i] == ')')
      {
           
        let A = [...s]
        reverse(A, stack[s.length-1] + 1, i);
        s = [...A].join("");
        stack.pop();
      }
    }

  return s
    .split("")
    .filter((a) => a !== "(" && a !== ")")
    .join("");
}
