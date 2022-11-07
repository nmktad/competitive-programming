function rotate(nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {

    for (let j = nums.length - 1 - k; j < nums.length - 1; j++) {
      // [1,2,3,4,5,6,7] i = 0 j = 3
      // [5,2,3,4,1,6,7] i = 1 j = 4
      // [5,6,3,4,1,2,7] i = 2 j = 5
      // [5,6,7,4,1,2,3] i = 3 j = 6
 
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
}
