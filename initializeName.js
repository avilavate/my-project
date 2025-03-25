function initializeNames(name){
    let res='';
    name=name.split(" ");
    return name.reduce((accumulator,element,index) => {
    if(name.length>2 && (index!==0 && index!==name.length-1)){
       
            accumulator+=element[0]+". ";
    }
        else {
            accumulator+=element+" ";
        }
        return accumulator;
    }, '').trim();
}
 // console.log(initializeNames("John AB ff VB")); //Output: "John D. S."