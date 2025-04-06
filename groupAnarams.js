var groupAnagrams = function (strs) {
  let res = []
  let total=strs.length;
  for (let i = 0; i < strs.length; i++) {
    if(res.flat(Infinity).length===total) break;
    res.push(
      strs.filter(
        el => el.split('').sort().join('') === strs[i].split('').sort().join('')
      ).sort()
    )
  res=res.sort();
   let changed=false;
    // Remove res elements from strs
    for (let j = 0; j < res[i].length; j++) {
      let index = strs.indexOf(res[i][j])
      if (index > -1) {
        changed=true;
        strs.splice(index, 1)
      }
    }
    if(changed) i=0;
    if(strs.length===0) break;
    if(strs.length===1) {
      res.push([strs[0]])
      break;
    }
  }


  return res.sort()
}

console.log(groupAnagrams(["stop","pots","reed","","tops","deer","opts",""]))
