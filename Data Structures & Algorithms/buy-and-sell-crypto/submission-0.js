class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {	let maxProfit = 0
	let lowest = prices[0]

	for (let i = 1; i < prices.length; i++) {
		if (prices[i] - lowest > 0) {
			maxProfit =
				maxProfit < prices[i] - lowest ? prices[i] - lowest : maxProfit
		} else {
			lowest = prices[i]
		}
	}
	return maxProfit}
}
