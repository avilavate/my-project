/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  d = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
    100: 'Hundred',
    1000: 'Thousand',
    1000000: 'Million',
    1000000000: 'Billion'
  }
  let res=[];
  while (true) {
    let len = String(num).length
    if (len > 3) {
    let dig=String(( num /
        Number(
          "1"+Array(len - 1)
            .fill(0)
            .join('')
        ))).split(".")
    num=dig[1]
    
    res.push(String(dig[0])+d[Object.keys(d).filter(key=>
    {if(String(key).length==len)
        
           
              return key;
          
    }
    )[0]])
    }
  }
}
console.log(numberToWords(123456))