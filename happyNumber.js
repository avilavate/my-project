var isHappy = function(n) {
   let curr;
   let seen=[];
   let next;
   seen.push(n);
   
   while(seen.includes(next)==false){
       n=getNext(n);
       next=getNext(n);
       seen.push(n);
       if(n==1) return true;
   }
   return false;
};
function getNext(n){
    return n.toString().split('').reduce((sum, num) => sum + Math.pow(num, 2), 0);
}
console.log(isHappy(4)); //Output: true