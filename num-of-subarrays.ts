function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  const target = threshold * k;
  let currentSum = 0,
    ans = 0;

  for (let i = 0; i < k; i++) currentSum += arr[i];

  currentSum >= target && ans++;

  for (let j = k; j < arr.length; j++) {
    currentSum += arr[j];
    currentSum -= arr[j - k];

    currentSum >= target && ans++;
  }
  
  return ans;
}
