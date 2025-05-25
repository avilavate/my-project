/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let res=[]
    sentences.forEach((sentence, index) => {
       res.push(sentence.split(' ').length)
    });
    return res.indexOf(Math.max(...res))+1 
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])); // Output: 6