const a = [8,6,4,3,2,1]

const mergeArray = (a) => {
    return mergeSort(a)
}

const mergeSort = (a) => {
    if (a.length <= 1) return a
    let mid = Math.floor(a.length / 2)
    let left = a.slice(0, mid)
    let right = a.slice(mid)
    console.log(right)

    left = mergeSort(left)
    right = mergeSort(right)

    let block = []

    let lp = 0
    let rp = 0

    while (lp < left.length && rp < right.length) {
        if (left[lp] < right[rp]) {
            block.push(left[lp])
            lp++
        } else {
            block.push(right[rp])
            rp++
        }
    }

    if (lp < left.length) {
        block = block.concat(left.slice(lp))
    } else if (rp < right.length) {
        block = block.concat(right.slice(rp))
    }

    return block
}

console.log(a)
console.log(mergeArray(a))