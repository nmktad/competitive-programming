function lastStoneWeight(stones: number[]): number {
  if (stones.length == 1) {
    return stones as unknown as number;
  } else if (stones.length == 0) {
    return 0;
  }

  let heavy1 = Math.max(...stones);
  stones.splice(stones.indexOf(heavy1), 1);
  let heavy2 = Math.max(...stones);
  stones.splice(stones.indexOf(heavy2), 1);
  if (heavy1 > heavy2) {
    let newStone = heavy1 - heavy2;
    stones.push(newStone);
  }

  return lastStoneWeight(stones);
}
