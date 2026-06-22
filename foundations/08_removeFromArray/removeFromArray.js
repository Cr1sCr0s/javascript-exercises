const removeFromArray = function(array, ...args) {
  let newArray = array.slice();
  for(let i=0; i<newArray.length; i++){
    for(const arg of args){
      if(newArray[i] === arg){
        newArray.splice(i, 1);
        i--;
      }
    }
  }
  return newArray;
};
// removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
