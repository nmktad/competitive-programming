function partitionLabels(s: string): number[] {
  let lastIndex = {};

  for (let i = 0; i < s.length; i++) {
    lastIndex[s[i]] = i;
  }

  let partitions: number[] = [];

  for (let i = 0, start = 0, end = 0; i < s.length; i++) {
    end = Math.max(end, lastIndex[s[i]]);
    if (i === end) {
      partitions.push(i - start + 1);
      start = i + 1;
    }
  }
  return partitions;
}
