const palindromes = function (string) {
  string = string.toLowerCase();

  const stringSplit = string
  .split('')
  .filter(char => (/[a-z]|[0-9]/).test(char));

  const halfLength = Math.floor(stringSplit.length / 2);

  for(let i=0; i<halfLength; i++){
    if(
      !(stringSplit.at(i) === stringSplit.at(-(i+1)))
    ){ return false; }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
