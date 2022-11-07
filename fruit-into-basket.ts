function totalFruit(fruits: number[]): number {
  let ans = 0;
  const hashmap = {};

  for (let i = 0, j = 0; j < fruits.length; ++j) {
    hashmap[fruits[j]] = (fruits[j] || 0) + 1;

    while (Object.keys(hashmap).length > 2) {
      hashmap[fruits[i]] -= 1;
      delete hashmap[fruits[i]];
      ++i;
    }
    ans = Math.max(ans, j - i + 1);
  }

  return ans;
}
