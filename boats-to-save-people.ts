function numRescueBoats(people: number[], limit: number): number {
  let ans = 0;
  let lightest = 0,
    heaviest = people.length - 1;

  people.sort((a, b) => a - b);

  while (lightest <= heaviest) {
    ans++;

    if (people[lightest] + people[heaviest] <= limit) {
      lightest++;
    }

    heaviest--;
  }

  return ans;
}
