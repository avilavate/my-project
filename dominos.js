/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  for (let i = 0; i < dominoes.length; i++) {
    if (
      dominoes[i] === 'R' &&
      dominoes[i + 1] === '.' &&
      dominoes[i + 2] === 'L' 
    ) {
      continue
    }
    
  }
}

//".L.R...LR..L.."
