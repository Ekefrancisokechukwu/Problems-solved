function checkIsBalanced(s) {
  const stack = [];
  const bracketPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(checkIsBalanced("{[()]}"));
console.log(checkIsBalanced("{[(])}"));
console.log(checkIsBalanced("()[]{}"));
console.log(checkIsBalanced("((("));
console.log(checkIsBalanced(")"));
