function topKFrequent(nums: number[], k: number): number[] {
  const map = {};

  nums.forEach((ele) => {
    map[ele] = (map[ele] || 0) + 1;
  });

  const count = Array(nums.length + 1);

  Object.entries(map).forEach(([key, val]) => {
    if (typeof val === "number") {
      if (!count[val]) {
        count[val] = [key];
      } else {
        count[val].push(key);
      }
    }
  });

  let i = count.length - 1;

  const res: number[] = [];

  while (k > 0) {
    if (!count[i] || count[i].length === 0) {
      i--;
    } else {
      res.push(count[i].pop());
      k--;
    }
  }

  return res;
}
