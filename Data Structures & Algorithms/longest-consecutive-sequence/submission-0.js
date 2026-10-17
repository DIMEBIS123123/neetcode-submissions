class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let length = 0
	let storage = new Set()

	for (let i = 0; i < nums.length; i++) {
		storage.add(nums[i])
	}

	for (let i = 0; i < nums.length; i++) {
		let current = nums[i]
		let count = 1
		if (!storage.has(current - 1)) {
			while (storage.has(current + 1)) {
				count++

				current += 1
			}
			length = length > count ? length : count
		}
	}
	return length
    }
}
