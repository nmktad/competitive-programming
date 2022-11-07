function bagOfTokensScore(tokens: number[], power: number): number {
  let score = 0;

  tokens.sort((a, b) => a - b);
  if (tokens.length == 0 || power < tokens[0]) return 0;
  let i = 0,
    j = tokens.length - 1;
  while (i <= j) {
    if (power >= tokens[i]) {
      score++;
      power -= tokens[i++];
    } else {
      if (j - i >= 1) {
        power += tokens[j--];
        score--;
      } else break;
    }
  }

  return score;
}
