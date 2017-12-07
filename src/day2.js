exports.checksum = input => {
  return input.split("\n").map(row => {
    return row.split(" ").filter(number => {
      return number !== "";
    }).map(number => {
      return parseInt(number);
    });
  }).reduce((accumulator, row) => {
    let smallest = Math.min(...row);
    let largest = Math.max(...row);
    return accumulator + (largest - smallest);
  }, 0);
};
