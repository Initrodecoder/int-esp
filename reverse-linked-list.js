
class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const reverseLinkedList = (head) => {
    let prev = null
    let currentNode = head

    while(currentNode != null) {
        let swap = currentNode.next
        currentNode.next = prev
        prev = currentNode
        currentNode = swap
    }
    return prev
}

const reverseLinkedListR = (currentNode, prev = null) => {
    if (currentNode === null) return prev
    let swap = currentNode.next
    currentNode.next = prev
    return reverseLinkedListR(swap, currentNode)
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
node2.next = node3
node1.next = node2
const head = new ListNode(0)
head.next = node1

console.log(head)
//console.log(reverseLinkedList(head))

console.log(reverseLinkedListR(head))