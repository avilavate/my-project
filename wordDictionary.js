var WordDictionary = function () {
  this.dict = []
}

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  this.dict.push(word)
}

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this.dict.some(w => {
    if (w.length !== word.length) return false
    for (let i = 0; i < w.length; i++) {
      if (word[i] !== '.' && word[i] !== w[i]) return false
    }
    return true
  })
} //
//
//
//Your WordDictionary object will be instantiated and called as such:
var obj = new WordDictionary()
obj.addWord("Avil")
console.log(obj.search("Avil")) // true
console.log(obj.search("A.i."))


a=[1,2,3,4,5]
console.log(a.some((v,i)=>{
console.log("*")
return v
}))