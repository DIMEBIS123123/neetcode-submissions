/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(arr1, arr2) {
        let dummy = new ListNode(-1)
	let current = dummy

	while (arr1 !== null && arr2 !== null) {
		if (arr1.val <= arr2.val) {
			current.next = arr1
			current = current.next
			arr1 = arr1.next
		} else {
			current.next = arr2
			current = current.next
			arr2 = arr2.next
		}
	}
	if (arr1 !== null) {
		current.next = arr1
	} else if (arr2 !== null) {
		current.next = arr2
	}
	return dummy.next
    }
}
