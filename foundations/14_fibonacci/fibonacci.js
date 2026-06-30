const fibonacci = function(target) {
  target = +(target);
  if(target < 0) return 'OOPS';
  if(target === 0) return 0;
  let curr = 1; let prev = 0; let temp = 0;
  for(let i = 1; i<target; i++){
    temp = curr;
    curr += prev;
    prev = temp;
  }
  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
