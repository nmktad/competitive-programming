function longestMountain(arr: number[]): number {
  if (arr.length < 3) return 0;
  let max = 0;
  let beginPtr: undefined | number = undefined;
  let endPtr: undefined | number = undefined;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) {
      if (endPtr) {
        endPtr = undefined;
        beginPtr = undefined;
      }

      if (!beginPtr) beginPtr = i;
    } else {
      if (arr[i + 1] < arr[i]) {
        if (beginPtr) endPtr = i + 1;
        if (endPtr && beginPtr && max <= endPtr - beginPtr + 1)
          max = endPtr - beginPtr + 1;
      } else {
        endPtr = undefined;
        beginPtr = undefined;
      }
    }

    let current = arr[i];

    console.log({ endPtr, beginPtr, current, i, max });
  }
  return max;
}
