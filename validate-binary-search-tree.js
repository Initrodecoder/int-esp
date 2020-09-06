class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

// pre order traversal
const isValidBST = (root, min=Number.MIN_SAFE_INTEGER, max=Number.MAX_SAFE_INTEGER) => {
    if (!root) return true
    if (root.value <= min || root.value >= max) return false
    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max)
}