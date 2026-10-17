class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        strs = strs.map(str => str.length + '#' + str).join('')

	return strs
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
        let strs = []
	let i = 0
	let positionOfHash
	let number

	while (i < s.length) {
		positionOfHash = s.indexOf('#', i)
		number = parseInt(s.slice(i, positionOfHash))
		strs.push(s.slice(positionOfHash + 1, positionOfHash + 1 + number))
		i = positionOfHash + 1 + number
	}

	return strs
    }
}
