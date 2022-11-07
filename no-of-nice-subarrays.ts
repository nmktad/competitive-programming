function numberOfSubarrays(nums: number[], k: number): number {
  let ret = 0;
  const arr = [0];
  const map = {};
  map[0] = 1;

  for (let i = 1; i <= nums.length; ++i) {
    nums[i - 1] % 2 == 0 ? (arr[i] = arr[i - 1]) : (arr[i] = arr[i - 1] + 1);

    ret += map[arr[i] - k] || 0;

    map[arr[i]] = (map[arr[i]] || 0) + 1;
  }

  return ret;
}
