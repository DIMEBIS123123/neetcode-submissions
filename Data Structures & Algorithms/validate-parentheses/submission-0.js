class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {	const brackets = new Map([
		[')', '('],
		['}', '{'],
		[']', '['],
	])

	const stackArray = []

	for (const char of s) {
		if (!brackets.has(char)) {
			stackArray.push(char)
		} else if (stackArray.pop() !== brackets.get(char)) {
			return false
		}
	}
	if (stackArray.length > 0) {
		return false
	}
	return true}
}
