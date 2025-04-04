var toLowerCase = function (str) {
  str = str.split('')

  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
      str[i] = String.fromCharCode(str[i].charCodeAt(0) + 32)
    }
  }
  return str.join('')
}

console.log(toLowerCase("HELLO"));

