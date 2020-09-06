class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const levelOrderTraversal = (root) => {
    if (!root) return []
    const queue = [root]
    const levels = []
    while(queue.length) {
        let size = queue.length
        const currentLevel = []
        while(size > 0) {
            const item = queue.shift()
            currentLevel.push(item, value)
            if (item.left) queue.push(item.left)
            if (item.right) queue.push(item.right)
            size--
        }
        levels.push(currentLevel)
    }
    return levels
}