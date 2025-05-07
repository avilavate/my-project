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
var insertGreatestCommonDivisors = function (head) {
  function gcd (a, b) {
    while (b !== 0) {
      let temp = b
      b = a % b
      a = temp
    }
    return a
  }

  let current = head
  while (current && current.next) {
    let node = new ListNode(gcd(current.val, current.next.val), current.next)
    current.next = node
    
  }

  return head
}

console.log(gcd(56, 98)) // Example usage
