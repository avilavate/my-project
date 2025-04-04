/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  let res = []
  for (let i = 0; i < image.length; i++) {
    res[i] = image[i].reverse().map(ele=>ele===0?1:0);
  }
  return res;
}


let image = [[1,1,0],[1,0,1],[0,0,0]]

console.log(flipAndInvertImage(image));