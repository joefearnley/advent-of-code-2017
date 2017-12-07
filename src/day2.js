exports.checksum = input => {
  const rows = input.split("\n").map(number => {
    return parseInt(number);
  });
  let checksum = 0;

  const smallestLarget = rows.forEach(row => {
    let smallest = Math.min(...rows[i]);
    let largest = Math.max(...rows[i]);
    return largest - smallest;
  });

  console.log(smallestLarget);

  // for (let i = 0; i < rows.length; i++) {

  // }
};
