var lengthOfLastWord = function(s) {
    s=s.trim()
    return s.length-(s.lastIndexOf(" ")+1);
};

console.log(lengthOfLastWord("Avil Avate Route 1 "));