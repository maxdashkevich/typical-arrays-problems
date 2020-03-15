
exports.min = function min (array) {
  if (!array || array.length == 0) { 
    return 0;
  } else return Math.min(...array);
}

exports.max = function max (array) {
  if (!array || array.length == 0) {
    return 0;
  } else return Math.max(...array);
}

exports.avg = function avg (array) {
  let ans = 0;
  let sum = 0;
  if (!array || array.length == 0) {
    return 0;
  } else {
    for (let i in array) {
      sum += array[i];
    } 
    return sum/array.length;
  }
}
