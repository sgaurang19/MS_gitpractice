// find the missing number in a given integer array of 1 to 100
let a = [1,2,3,4,5,6,7,8,9,10,12,14,15,16,17,18,19,22,23,25,26,30]
function findMissing(){
    count = a.length;
    missing = [];

  for (let i = 1; i <= count; i++) {
    if (a.indexOf(i) === -1) {
      missing.push(i)
    }
  }
  return missing
}
console.log(findMissing(a));