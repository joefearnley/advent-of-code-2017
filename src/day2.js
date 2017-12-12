exports.checksum = input => {
  return input.split("\n").map(row => {
    return row.split(" ")
      .filter(number => number !== "")
      .map(number =>  parseInt(number));
  }).reduce((accumulator, row) => {
    let smallest = Math.min(...row);
    let largest = Math.max(...row);
    return accumulator + (largest - smallest);
  }, 0);
};

exports.checksum2 = input => {
  return input.split("\n")
    .map(row => {
      const numbers = row.split(" ");
      let checksum = 0;
      numbers.forEach(number => {
        numbers.forEach(number2 => {
          let result = parseInt(number) / parseInt(number2);
          if (Number.isInteger(result) && result !== 1) {
            checksum += result;
          }
        });
      });
      return checksum;
  }, 0)
  .reduce((a, b) => a + b, 0);
};
