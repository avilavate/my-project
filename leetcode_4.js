var findMedianSortedArrays = function (nums1, nums2) {
  let len1 = -1
  let len2 = -1

  len1 = nums1.length - 1
  len2 = nums2.length - 1

  let mid1 = -1
  let mid2 = -1

  let median1 = 0
  let median2 = 0
  if (len1 >= 0) {
    if (len1 % 2 === 0) {
      mid1 = len1 / 2
      median1 = nums1[mid1]
    } else {
      mid1 = Math.floor(len1 / 2)
      median1 = (nums1[mid1] + nums1[mid1 + 1]) / 2
    }
  }
  if (len2 >= 0) {
    if (len2 % 2 === 0) {
      mid2 = len2 / 2
      median2 = nums2[mid2]
    } else {
      mid2 = Math.floor(len2 / 2)
      median2 = (nums2[mid2] + nums2[mid2 + 1]) / 2
    }
  }
  let divisor=nums1.length==0?1:(nums2.length==0?1:2);
  console.log(divisor)
  console.log(`median1: ${median1}`);
  console.log(`median2: ${median2}`);
  return (median1 + median2)/divisor;
}

console.log(findMedianSortedArrays([2,2,4,4], [2,2,2,4,4])) // 2.00000
