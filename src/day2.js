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

exports.checksum2 = input => {
  return input.split("\n").map(row => {
      const numbers = row.split(" ");
      let checksum = 0;
      for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
          let result = parseInt(numbers[i]) / parseInt(numbers[j]);
          if (Number.isInteger(result) && result !== 1) {
            checksum += result;
          }
        }
      }

      return checksum;
  }, 0).reduce((a, b) => a + b, 0);
};
