class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

// pre order traversal
const isBalanced = () => {
    if (!root) return true
    const leftDepth = getDepth(root.left)
    const rightDepth = getDepth(root.right)
    const balanced = Math.abs(leftDepth - rightDepth) <= 1
    return balanced && isBalanced(root.left) && isBalanced(root.right)
}

const getDepth = (root) => {
    if (!root) return 0
    return 1 + Math.max(getDepth(root.left, getDepth(root.right)))
}