class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        	if (n <= 2) return n
	let ways1 = 1
	let ways2 = 2
	let current = 0

	for (let i = 3; i <= n; i++) {
		current = ways1 + ways2
		ways1 = ways2
		ways2 = current
	}

	return current
    }
}
