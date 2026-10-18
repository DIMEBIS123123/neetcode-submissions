class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const answers = []
	let accum = 1
	answers[0] = 1

	for (let i = 0; i < nums.length; i++) {
		if (i > 0) {
			answers[i] = accum
		}
		accum *= nums[i]
	}
	for (let i = nums.length - 1; i >= 0; i--) {
		if (i < nums.length - 1) {
			answers[i] *= accum
		}
		if (i == nums.length - 1) {
			accum = 1
		}
		accum *= nums[i]
	}
	return answers
    }
}
