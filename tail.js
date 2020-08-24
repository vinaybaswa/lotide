const tail = fullArray => {
  let tailArray = [];
  for (let i = 1; i < fullArray.length; i++) {
    tailArray.push(fullArray[i]);
  }
  return tailArray;
};

module.exports = tail;