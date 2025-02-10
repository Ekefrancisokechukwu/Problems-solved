function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function findLCM(arr) {
  return arr.reduce((acc, num) => lcm(acc, num), arr[0]);
}

function findGCD(arr) {
  return arr.reduce((acc, num) => gcd(acc, num), arr[0]);
}

function countBetweenSets(a, b) {
  let lcmA = findLCM(a);
  let gcdB = findGCD(b);

  let count = 0;

  for (let num = lcmA; num <= gcdB; num += lcmA) {
    if (gcdB % num === 0) {
      count++;
    }
  }

  return count;
}

const a = [2, 6];
const b = [24, 36];

console.log(countBetweenSets(a, b));
