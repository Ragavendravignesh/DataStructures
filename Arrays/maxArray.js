const nums = [5,4,-1,7,8]

const maxSubArray = function (nums) {
  let sum = 0
  const maxArray = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
        sum = nums[i] + nums[j]
        console.log(sum);
        maxArray.push(sum)
      }
    }
  }
  return Math.max(...maxArray)
}

console.log(maxSubArray(nums))
