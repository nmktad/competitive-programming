function maxSumTwoNoOverlap(
  nums: number[],
  firstLen: number,
  secondLen: number
): number {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }

  let firstSubArrMax = nums[firstLen - 1],
    secondSubArrMax = nums[secondLen - 1];
  let res = nums[secondLen + firstLen - 1];

  for (let i = secondLen + firstLen; i < nums.length; i++) {
    firstSubArrMax = Math.max(
      firstSubArrMax,
      nums[i - secondLen] - nums[i - secondLen - firstLen]
    );
    secondSubArrMax = Math.max(
      secondSubArrMax,
      nums[i - firstLen] - nums[i - secondLen - firstLen]
    );

    res = Math.max(
      res,
      firstSubArrMax + nums[i] - nums[i - secondLen],
      secondSubArrMax + nums[i] - nums[i - firstLen]
    );
  }

  return res;
}
