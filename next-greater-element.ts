function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let result: number[] = [];

  nums1.forEach((num) => {
    let index = nums2.indexOf(num);
    for (let i = index + 1; i < nums2.length; i++) {
      if (nums2[i] > num) {
        result.push(nums2[i]);
        return;
      }
    }

    result.push(-1);
  });

  return result;
}
