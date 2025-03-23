var longestCommonPrefix = function(strs) {
if(strs.length==0) return "";
if(strs.length==1) return strs[0];
let word=strs[0].split('');
    let len=0;
    let res=[];
    let found=[];
   
    for(let i=word.length-1;i>=0;i--){
        let substr=word.slice(0,i+1).join('');
        let success=false;
        for(let j=1; j<strs.length; j++)
            {
                if(!strs[j].startsWith(substr)){
                   success=false;
                   break;
                 
                }
                else{
                    success=true;
                   
                }
              
            }
        if(success){
            found.push(substr);
            break;
        }   
    }
    return found[0];
}


//console.log(longestCommonPrefix(["flower","flower","flower","flower"])); //Output: "fl"
console.log(longestCommonPrefix(["ab","a"])); //Output: ""