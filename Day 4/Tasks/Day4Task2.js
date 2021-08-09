var numbers = [2, 4, 9, 2, 10, 16, 24];

var sorted = numbers.slice().sort(function(a, b) {
  return a - b;
});

var smallest = sorted[0], largest  = sorted[sorted.length - 1];

console.log('Smallest: ' + smallest);
console.log('Largest: ' + largest);