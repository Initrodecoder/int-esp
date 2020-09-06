class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

// depth first search
const mexDepthDFS = (root) => {
    if (!root) return 0

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

// breadth first search
const mexDepthBFS = (root) => {
    if(!root) return 0
    const queue = [root]
    let depth = 0
    while(queue.length) {
        let size = queue.length
        depth++
        while(size--) {
            let item = queue.shift()
            if (item.left) queue.push(item.left)
            if(item.right) queue.push(item.right)
        }
    }
    return depth
}