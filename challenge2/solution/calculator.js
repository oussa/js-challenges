function calculate(event) {
  event.preventDefault();
  const myCalculator = document.getElementById('myCalculator');
  const input1 = Number(myCalculator.input1.value);
  const input2 = Number(myCalculator.input2.value);
  const operation = myCalculator.operation.value;
  console.log(input1, input2, operation);

  let result;
  if (operation === '+') {
    result = input1 + input2;
  } else if (operation === '-') {
    result = input1 - input2;
  } else if (operation === '*') {
    result = input1 * input2;
  } else if (operation === '/') {
    result = input1 / input2;
  }
  document.getElementById('myCalculator').result.value = result;
}
