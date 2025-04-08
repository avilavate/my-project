/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    s=s.split('');
    for (let i = 0; i < s.length; i++) {
       let num1=Number(s[i]);
       let num2=Number(s[i+1]);
      if(num1===num2) {
        return true;
      }
      else{
        
      }
    }
};