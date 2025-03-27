/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1=version1.split(".").map(i=>parseInt(i));
    let v2= version2.split(".").map(i=>parseInt(i));

    if(v1.length>v2.length)
    v2=v2.concat(Array(v1.length-v2.length).fill(0.0));
    else
    v1=v1.concat(Array(v2.length-v1.length).fill(0.0));
    let res=0;

    for (let index = 0; index<v1.length; index++) {
       
        if(v1[index]==v2[index]) {res=0; continue;}
        if(v1[index]>v2[index])  {res=1; break;}
        if(v1[index]<v2[index]) {res=-1; break;}
        
    }
return res;
};

compareVersion("1.2", "1.10");