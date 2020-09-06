
class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const detectLinkedListCycle = (head) => {
    const nodes = new Set()
    let currentNode = head
    while(currentNode != null) {
        currentNode = currentNode.next
        if(nodes.has(currentNode)) return true
        nodes.add(currentNode)
    }
    return false
}

const detectLinkedListCycleFloydsAlgorithm = (head) => {
    let slow = head
    let fast = head
    while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) return true
    }
    return false
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
node2.next = node3
node1.next = node2
const head = new ListNode(0)
head.next = node1

const cycleNode1 = new ListNode(1)
const cycleNode2 = new ListNode(2)
const cycleNode3 = new ListNode(3)
const cycleNode4_CYCLE = new ListNode(4)
cycleNode4_CYCLE.next = cycleNode2
cycleNode3.next = cycleNode4_CYCLE
cycleNode2.next = cycleNode3
cycleNode1.next = cycleNode2
const cycleHead = new ListNode(0)
cycleHead.next = cycleNode1

console.log(cycleHead)
//console.log(detectLinkedListCycle(head))

//console.log(detectLinkedListCycle(head))

console.log(detectLinkedListCycleFloydsAlgorithm(cycleHead))