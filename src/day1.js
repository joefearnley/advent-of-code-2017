export default function inverseCaptcha(input) {
  const arrInput = input.split("");
  var previous = arrInput[0];
  var result = 0;

  for (let i = 1; i < arrInput.length; i++) {
    if (previous === arrInput[i]) {
      result += arrInput[i];
    }

    previous = arrInput[i];
  }

  return result;
}
