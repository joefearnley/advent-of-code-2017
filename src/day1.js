exports.inverseCaptcha = input => {
  const arrInput = input.toString().split("");
  let previous = arrInput[0];
  let result = 0;

  for (let i = 1; i < arrInput.length; i++) {
    result += (previous === arrInput[i]) ? parseInt(arrInput[i]) : 0;
    previous = arrInput[i];
  }

  const lastNumber = arrInput[arrInput.length - 1];
  result += (arrInput[0] === lastNumber) ? parseInt(lastNumber) : 0;

  return result;
};
