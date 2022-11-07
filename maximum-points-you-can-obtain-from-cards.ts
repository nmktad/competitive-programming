function maxScore(cardPoints: number[], k: number): number {
  let total = 0;
  for (let i = 0; i < k; i++) total += cardPoints[i];
  let best = total;
  for (let i = k - 1, j = cardPoints.length - 1; ~i; i--, j--)
    (total += cardPoints[j] - cardPoints[i]), (best = Math.max(best, total));
  return best;
}
