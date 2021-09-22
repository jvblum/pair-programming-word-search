const wordSearch = (letters, word) => { 
  const transpose = function(matrix) {
    // Put your solution here
    let someArr = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        someArr.push(new Array());
        someArr[j].push(matrix[i][j]);
      }
    }
    let result = [...someArr];
    return result;
  };
  
  const verticalJoin = transpose(letters).map(ls => ls.join(''))
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
    console.log(l);
    if (l.includes(word)) return true;
  }
  for (l of verticalJoin) {
    console.log(l);
    if (l.includes(word)) return true;
  }
  return false
};

module.exports = wordSearch

// pair: @jvblum, @hcblam