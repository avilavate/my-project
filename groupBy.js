/**
 * @param {Function} fn
 * @return {Object}
 */
if (!Array.prototype.groupBy) {
    Array.prototype.groupBy = function (fn) {
      let map ={}
      this.forEach(ele => {
        let key = fn(ele)
        if(!map[key]) {
          map[key] = []
        }
        map[key].push(ele)
      })
  
      return map
    }
  }