function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero. Please provide a non-zero divisor.");
  }
  return a / b;
}

function calculate(a, b, op) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both operands must be numbers.');
  }

  const validOperators = ['+', '-', '*', '/'];
  if (!validOperators.includes(op)) {
    throw new Error(`Invalid operator: '${op}'.  Valid operators are: ${validOperators.join(', ')}`);
  }

  switch (op) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '-')); // 5
console.log(calculate(10, 5, '*')); // 50
console.log(calculate(10, 5, '/')); // 2
console.log(calculate(10, 0, '/')); // Throws a more descriptive error
console.log(calculate(10, 5, '%')); // Throws a more descriptive error
console.log(calculate("hello", 5, '+')); // Throws an error about invalid input type
