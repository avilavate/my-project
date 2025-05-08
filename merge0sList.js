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
var mergeNodes = function (head) {
  let curr = head
  let res = []
  while (curr) {
    if (curr.val === 0) {
        res.push(0)
        let sum=0
        while(curr && curr.val !== 0) {
          sum += curr.val
          curr = curr.next
        }
        res.push(sum)
    }
  }
  console.log(res)
}
