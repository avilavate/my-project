/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    let cellPositions=s.split(":");

    let rows=[];
    let cols=[];

    rows=[cellPositions[0][0].charCodeAt(), cellPositions[1][0].charCodeAt()];
    let res=[]
    let counter=parseInt(cellPositions[0][1]);
    let limit=parseInt(cellPositions[1][1]);

    while(rows[0]<=rows[1]){
        let counter=parseInt( cellPositions[0][1]);
        while(counter<=limit){
            res.push((String.fromCharCode(rows[0]))+counter.toString());
            counter++;
        }
        rows[0]++;
    }
return res;
};

console.log(cellsInRange("K1:L2"));