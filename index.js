module.exports = function circularAt (array, index) {
  const length = array && array.length
  var idx = Math.abs(length + index % length) % length
  return array[isNaN(idx) ? index : idx]
}
