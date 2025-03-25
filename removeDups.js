/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   nums.sort();
   temp=nums.filter((x,i)=>nums.indexOf(x)==i)
   nums.length=0;
   for(let i=0;i<temp.length;i++){
       nums.push(temp[i])
   }
   //console.log(nums)

}
let nums=[1,2,1];
console.log(nums); //Output: 1
removeDuplicates(nums);
console.log(nums)
//console.log(removeDuplicates( [1,1,2])); //Output: 1