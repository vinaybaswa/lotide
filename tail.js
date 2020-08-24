const tail = someData => {
  let dataTail = [];
  for (let i = 1; i < someData.length; i++) {
    dataTail.push(someData[i]);
  }
  return dataTail;
};

module.exports = tail;