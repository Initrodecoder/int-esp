function binarySearch(a,t) {
  let lo = 0
  let hi = a.length - 1
  
  while (lo <= hi) {
    let mid = Math.floor((hi + lo) / 2)
    let midVal = a[mid]
    if (t === midVal) {
      return mid
    } else if (t > midVal) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }
  return lo
}

console.log( binarySearch( [1,2,4,5,9], 5 ) )
console.log( binarySearch( [1,2,4,5,9], 3 ) )