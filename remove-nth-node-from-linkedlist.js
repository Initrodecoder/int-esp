/** 
  * @desc this class represents a node data element to be used in linked lists.
  * example use: new ListNode(3)
  * @author Sean Moore seanmoore1976@gmail.com
  * @required n/a
*/
class ListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

/**
  * @desc Remove Nth Node From End of List
  * @param ListNode $head - represents the head node in the linked list.
  * @param int $n - represents the node in the linked list to remove. n is not zero based.
  * @return ListNode - modified linked list with specified node removed.
*/
const removeNthNodeFromEnd = (head, n) => {
  
  // store reference to head passed into
  // function.
  let currentNode = head
  // Assumes there's always one node (head).
  let nodeCount = 1
  // calculate how many nodes are in the
  // linked list passed into the function.
  while(currentNode) {
    // increment the total count of nodes
    // in the linked list provided to the
    // function.
    nodeCount++
    // step along down the pointer chain
    currentNode = currentNode.next
  }

  // calculate the left hand
  // pointer index based off
  // parameter passed into function. 
  // the calculation subtracts the total
  // node count, or length of nodes
  // in the list from the n param 
  // provided to the function call.
  // n param passed into function is
  // one based, not zero based.
  let leftIndex = nodeCount - n - 1

  console.log("leftIndex: "+leftIndex)

  if (leftIndex === 0) {
    // n parameter passed to function
    // points at first node, which is
    // the current head node of the list.
    // return the node that the current heads
    // next property is pointing to.
    // this orphans the current head node
    // as no references are pointing to it
    // from anywhere. the GC will clean up
    // the abandoned head node.
    return head.next
  }

  // reset currentNode pointer.
  // the while loop above that's used to count 
  // the nodes in the linked list steps 
  // through the nodes and leaves the 
  // currentNode pointer on the last node in 
  // the linked list.
  currentNode = head

  console.log("leftIndex: ",leftIndex)
  while(leftIndex > 1) {
    currentNode = currentNode.next
    leftIndex--
    console.log("leftIndex: ",leftIndex)
  }

  // replace currentNode's next property
  // with the node that its next property
  // is pointing at. jumping ahead one
  // node. the current node in currentNode's
  // next property no longer has anything
  // referencing, or pointint to, it any more.
  // GC will come along and clean up the
  // memory space for the orphaned node.
  currentNode.next = currentNode.next.next

  // all node next pointer properties
  // updated to reflect the request sent
  // into the function. return the updated
  // linked list to caller.
  return head
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
node2.next = node3
node1.next = node2
const head = new ListNode(0)
head.next = node1

//removeNthNodeFromEnd(head,4)
//removeNthNodeFromEnd(head,2)

console.log(removeNthNodeFromEnd(head,2))

