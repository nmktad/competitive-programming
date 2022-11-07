function productExceptSelf(nums: number[]): number[] {
  if (nums.length == 1) return nums;

  const prod: number[] = [];
  prod[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    prod[i] = nums[i - 1] * prod[i - 1];
  }

  for (let i = nums.length - 1, suffix = 1; i >= 0; i--) {
    prod[i] *= suffix;
    suffix *= nums[i];
  }

  return prod;
}
