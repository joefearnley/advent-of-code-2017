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

exports.inverseCaptcha2 = input => {
  const arrInput = input.toString().split("");
  let result = 0;
  
  for (let i = 0; i < arrInput.length; i++) {
      let next = (i + (arrInput.length / 2)) % arrInput.length;
      if (arrInput[i] == arrInput[next]) {
          result += parseInt(arrInput[i]);
      }
  }

  return result;
};