/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
  date = date.split('-')

  return (
    (parseInt(date[0],10)).toString(2) +
    '-' +
    (parseInt(date[1], 10)).toString(2)+
    '-' +
    (parseInt(date[2], 10)).toString(2)
  )
}

console.log(convertDateToBinary("2080-02-29"))
