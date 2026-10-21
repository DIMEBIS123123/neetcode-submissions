class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(arr)  {
	const row = new Set()
	const col = new Set()
	const block = new Set()

	for (let i = 0; i < arr.length; i++) {
		if (arr[i][0] !== '.' && row.has('row-' + i + '-' + arr[i][0])) {
			return false
		}
		row.add('row-' + i + '-' + arr[i][0])
		if (arr[i][1] !== '.' && row.has('row-' + i + '-' + arr[i][1])) {
			return false
		}
		row.add('row-' + i + '-' + arr[i][1])
		if (arr[i][2] !== '.' && row.has('row-' + i + '-' + arr[i][2])) {
			return false
		}
		row.add('row-' + i + '-' + arr[i][2])
		if (arr[i][3] !== '.' && row.has('row-' + i + '-' + arr[i][3])) {
			return false
		}
		row.add('row-' + i + '-' + arr[i][3])
		if (arr[i][4] !== '.' && row.has('row-' + i + '-' + arr[i][4])) {
			return false
		}
		row.add('row-' + i + '-' + arr[i][4])
		if (arr[i][5] !== '.' && row.has('row-' + i + '-' + arr[i][5])) {
			return false
		}
		row.add('row-' + i + '-' + arr[i][5])
		if (arr[i][6] !== '.' && row.has('row-' + i + '-' + arr[i][6])) {
			return false
		}
		row.add('row-' + i + '-' + arr[i][6])
		if (arr[i][7] !== '.' && row.has('row-' + i + '-' + arr[i][7])) {
			return false
		}
		row.add('row-' + i + '-' + arr[i][7])
		if (arr[i][8] !== '.' && row.has('row-' + i + '-' + arr[i][8])) {
			return false
		}
		row.add('row-' + i + '-' + arr[i][8])

		if (arr[i][0] !== '.' && col.has('col-' + 0 + '-' + arr[i][0])) {
			return false
		}
		col.add('col-' + 0 + '-' + arr[i][0])
		if (arr[i][1] !== '.' && col.has('col-' + 1 + '-' + arr[i][1])) {
			return false
		}
		col.add('col-' + 1 + '-' + arr[i][1])
		if (arr[i][2] !== '.' && col.has('col-' + 2 + '-' + arr[i][2])) {
			return false
		}
		col.add('col-' + 2 + '-' + arr[i][2])
		if (arr[i][3] !== '.' && col.has('col-' + 3 + '-' + arr[i][3])) {
			return false
		}
		col.add('col-' + 3 + '-' + arr[i][3])
		if (arr[i][4] !== '.' && col.has('col-' + 4 + '-' + arr[i][4])) {
			return false
		}
		col.add('col-' + 4 + '-' + arr[i][4])
		if (arr[i][5] !== '.' && col.has('col-' + 5 + '-' + arr[i][5])) {
			return false
		}
		col.add('col-' + 5 + '-' + arr[i][5])
		if (arr[i][6] !== '.' && col.has('col-' + 6 + '-' + arr[i][6])) {
			return false
		}
		col.add('col-' + 6 + '-' + arr[i][6])
		if (arr[i][7] !== '.' && col.has('col-' + 7 + '-' + arr[i][7])) {
			return false
		}
		col.add('col-' + 7 + '-' + arr[i][7])
		if (arr[i][8] !== '.' && col.has('col-' + 8 + '-' + arr[i][8])) {
			return false
		}
		col.add('col-' + 8 + '-' + arr[i][8])

		if (
			arr[i][0] !== '.' &&
			block.has(
				'block-' +
					(Math.floor(i / 3) * 3 + Math.floor(0 / 3)) +
					'-' +
					arr[i][0],
			)
		) {
			return false
		}
		block.add(
			'block-' + (Math.floor(i / 3) * 3 + Math.floor(0 / 3)) + '-' + arr[i][0],
		)
		if (
			arr[i][1] !== '.' &&
			block.has(
				'block-' +
					(Math.floor(i / 3) * 3 + Math.floor(1 / 3)) +
					'-' +
					arr[i][1],
			)
		) {
			return false
		}
		block.add(
			'block-' + (Math.floor(i / 3) * 3 + Math.floor(1 / 3)) + '-' + arr[i][1],
		)
		if (
			arr[i][2] !== '.' &&
			block.has(
				'block-' +
					(Math.floor(i / 3) * 3 + Math.floor(2 / 3)) +
					'-' +
					arr[i][2],
			)
		) {
			return false
		}
		block.add(
			'block-' + (Math.floor(i / 3) * 3 + Math.floor(2 / 3)) + '-' + arr[i][2],
		)
		if (
			arr[i][3] !== '.' &&
			block.has(
				'block-' +
					(Math.floor(i / 3) * 3 + Math.floor(3 / 3)) +
					'-' +
					arr[i][3],
			)
		) {
			return false
		}
		block.add(
			'block-' + (Math.floor(i / 3) * 3 + Math.floor(3 / 3)) + '-' + arr[i][3],
		)
		if (
			arr[i][4] !== '.' &&
			block.has(
				'block-' +
					(Math.floor(i / 3) * 3 + Math.floor(4 / 3)) +
					'-' +
					arr[i][4],
			)
		) {
			return false
		}
		block.add(
			'block-' + (Math.floor(i / 3) * 3 + Math.floor(4 / 3)) + '-' + arr[i][4],
		)
		if (
			arr[i][5] !== '.' &&
			block.has(
				'block-' +
					(Math.floor(i / 3) * 3 + Math.floor(5 / 3)) +
					'-' +
					arr[i][5],
			)
		) {
			return false
		}
		block.add(
			'block-' + (Math.floor(i / 3) * 3 + Math.floor(5 / 3)) + '-' + arr[i][5],
		)
		if (
			arr[i][6] !== '.' &&
			block.has(
				'block-' +
					(Math.floor(i / 3) * 3 + Math.floor(6 / 3)) +
					'-' +
					arr[i][6],
			)
		) {
			return false
		}
		block.add(
			'block-' + (Math.floor(i / 3) * 3 + Math.floor(6 / 3)) + '-' + arr[i][6],
		)
		if (
			arr[i][7] !== '.' &&
			block.has(
				'block-' +
					(Math.floor(i / 3) * 3 + Math.floor(7 / 3)) +
					'-' +
					arr[i][7],
			)
		) {
			return false
		}
		block.add(
			'block-' + (Math.floor(i / 3) * 3 + Math.floor(7 / 3)) + '-' + arr[i][7],
		)
		if (
			arr[i][8] !== '.' &&
			block.has(
				'block-' +
					(Math.floor(i / 3) * 3 + Math.floor(8 / 3)) +
					'-' +
					arr[i][8],
			)
		) {
			return false
		}
		block.add(
			'block-' + (Math.floor(i / 3) * 3 + Math.floor(8 / 3)) + '-' + arr[i][8],
		)
	}

	return true
}

}
