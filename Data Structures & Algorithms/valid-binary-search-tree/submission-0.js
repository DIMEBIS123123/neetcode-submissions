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
     * @return {boolean}
     */
    isValidBST(root) {
        function isIt(node, min, max) {
		if (node === null) {
			return true
		}

		if (node.val > min && node.val < max) {
			return isIt(node.left, min, node.val) && isIt(node.right, node.val, max)
		}
		return false
	}

	return isIt(root, -Infinity, +Infinity)
    }
}
