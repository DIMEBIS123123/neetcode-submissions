/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        	if (!root) {
		return []
	}
	const queue = [root]
	const result = []

	while (queue.length > 0) {
		const levelSize = queue.length
		const currentLevel = []
		for (let i = 0; i < levelSize; i++) {
			const r = queue.shift()
			currentLevel.push(r.val)
			if (r.left) {
				queue.push(r.left)
			}
			if (r.right) {
				queue.push(r.right)
			}
		}
		result.push(currentLevel)
	}
	return result
    }
}
