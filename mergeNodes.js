/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let curr = head;
    while(curr) {
        if (curr.val === 0) {
            let prev=curr
            let sum = 0;
            while (curr.next && curr.next.val !== 0) {
                sum += curr.next.val;
                curr = curr.next;
            }
            let node = new ListNode(sum);
            node.next = curr;
            prev.next = node;
            curr=curr.next;
        }
        curr = curr.next;
    }
    
};