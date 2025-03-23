var isMatch = function(s, p) {
   p=p.split('');
   let res=false;

   for (let index = 0; index < p.length; index++) {
    
        if(p[index]== '.') {
            if(s.length>0)
                res= true;
            else res= false;
}
    
        else if(p[index]== '*'){
            res= true;
        }
        else{
            if(p[index]=== s[index]){
                res= true;
            }
            else res=false
        }
    }
    return res;
   }

console.log(isMatch("aa","a")); // false
// Compare this snippet from isMatch.js:

