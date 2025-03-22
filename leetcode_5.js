var findMedianSortedArrays = function (nums1, nums2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        
        if(nums1[i] == nums2[j]){
            mergedArray.push(nums1[i]);
            mergedArray.push(nums2[j]);
            i++;
            j++;
            continue;
        }
        if (nums1[i] < nums2[j]) {
            mergedArray.push(nums1[i]);
            i++;
        } else {
            mergedArray.push(nums2[j]);
            j++;
        }
    }

    // Add remaining elements from nums1 or nums2
    while (i < nums1.length) {
        mergedArray.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        mergedArray.push(nums2[j]);
        j++;
    }

  let median= mergedArray.length % 2 !== 0 ?
    mergedArray[Math.floor(mergedArray.length / 2)] :
    (mergedArray[Math.floor(mergedArray.length / 2)] + mergedArray[Math.floor(mergedArray.length / 2) - 1]) / 2;

    return median;
};

console.log(findMedianSortedArrays([1, 2, 3,4], [2, 3,4, 5])) // [1, 2, 3]