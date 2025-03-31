/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    let newArr=[];
    arr.forEach((ele, index)=>{
        newArr.push({'ele':fn(ele), 'index':index});
    })

    newArr=newArr.sort((a,b)=>a.ele-b.ele);
    let res=[];
    //newArr.forEach((ele, index)=>res.push(ele.ele))
    for(let i=0; i<newArr.length;i++){
        res[i]=arr[newArr[i].index];
    }
    return res;
};

let arr = [{"x": 1}, {"x": 0}, {"x": -1}];
let fn = (d) => d.x


//Output: [1, 2, 3, 4, 5]
sortBy(arr, fn)