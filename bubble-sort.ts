function countSwaps(a: number[]): void {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        count++;
      }
    }
  }

  console.log(
    `Array is sorted in ${count} swaps. \nFirst Element: ${a[0]} \nLast Element: ${a[a.length - 1]}`
  );
}
