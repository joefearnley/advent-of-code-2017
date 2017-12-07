exports.inverseCaptcha = input => {
  const arrInput = input.toString().split("");
  const firstNumber = arrInput.shift();
  const lastNumber = arrInput[arrInput.length - 1];
  let previous = firstNumber;
  let result = 0;

  arrInput.forEach(number => {
    result += previous === number ? parseInt(number) : 0;
    previous = number;
  });

  result += firstNumber === lastNumber ? parseInt(lastNumber) : 0;

  return result;
};
