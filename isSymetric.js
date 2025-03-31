/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let n = root.length
  let str=root.join('');
  if(root.length<1) return true;
  let result=true
  counter=1;
  for (let index = 0; index < root.length; index++) {
    let total_nodes = Math.pow(2, counter)
    if (index <1) continue;
    else {
       // str.substring(index, total_nodes/2+1) === str.substring(total_nodes/2, total_nodes)
       let lvl= str.substring(index, Math.pow(2,index)+1)
       index=index+lvl.length-1;
       counter=counter+1;
       if(lvl.length%2!==0 && lvl.length!==total_nodes) return false;
       if(lvl!==lvl.split("").reverse().join("")) return result=false;
    }
  }
  return result;
}
// Example usage
let root = [1,2,2,2,2,2,2];
console.log(isSymmetric(root));