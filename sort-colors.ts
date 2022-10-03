function sortColors(nums: number[]) {
  function swap(i: number, j: number) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      swap(mid, low);
      low++;
      mid++;
    } else if (nums[mid] === 2) {
      swap(mid, high);
      high--;
    } else {
      mid++;
    }
  }

  return nums;
}
