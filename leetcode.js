var reverseWords = function(s) {
    let words= s.split(' ');

    let res=[];
    let counter= words.length-1;
    while(counter>=0){
        if(words[counter]!==''){
            res.push(words[counter]);
        }
        counter--;
    }
    return res.join(' ');
}

reverseWords("  hello world!  "); // "world! hello"