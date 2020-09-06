const a = [-4,-1,-1,0,1,2]

const findThreeSum = (a) => {
  const output = []
  a.sort()
  for (let i=0;i<a.length - 2;i++) {
    let lp = i + 1
    let rp = a.length - 1
    if (i > 0 && a[i] === a[i-1]) continue 
    while (lp < rp) {
      let total = a[i] + a[lp] + a[rp]
      if (total === 0) {
        output.push([a[i], a[lp], a[rp]])
        while (lp < rp && a[rp -1] === a[rp]) {
          rp--
        }
        while(lp < rp && a[lp +1] === a[lp]) {
          lp++
        }
        rp--
        lp++
      } else if (total > 0) {
        rp--
      } else {
        lp++
      }
    }
  }
  return output
}

console.log(findThreeSum(a))