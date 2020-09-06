const a = [3,4,8,2];

function findTwoSums(a, target) {
  for (let i=0;i<a.length;i++) {
      
    let numToFind = (target - a[i])

    for (let j=i+1;j<a.length;j++) {

      if (a[j] === numToFind) {
        return [i,j]
      }

    }
  }
}

console.log(a)
console.log(findTwoSums(a, 6))
