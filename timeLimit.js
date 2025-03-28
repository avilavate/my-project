/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
   
    return async function(...args) {
        
        return new Promise((resolve, reject)=>{
            let timeoutId= setTimeout(() => {
                 reject('Time Limit Exceeded');
             }, t);
  
             fn(...args)
                .then(result => {
                    clearTimeout(timeoutId);
                    resolve(result);
                })
                .catch(error => {
                    clearTimeout(timeoutId);
                    reject(error);
                });
        });
  
         
    
    }
}

  const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 1000);
  limited(0).catch(console.log) // "Time Limit Exceeded" at t=100ms


// let fn= async (n) => { await new Promise(res => setTimeout(res, 100)); return n * n; };
// let t=150;

// timeLimit(fn,t)([5])