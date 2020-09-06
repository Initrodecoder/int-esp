class ListNode {
    constructor(value) {
      this.value = value
      this.next = null
    }
  }


  const removeNthNodeFromEnd = (head, n) => {

console.log("Removing the "+n+" 'th node from the end of the list.")

let headParam = head

let currentNode = head
let nodeCount = 1
while(currentNode) {
    nodeCount++
    currentNode = currentNode.next
  }

head = headParam

console.log("This list contains "+nodeCount+" nodes.")
console.log("Function caller requests node "+((nodeCount-n)-1)+ " be deleted.")

    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    // Advances first pointer so that the gap between first and second is n nodes apart
    for (let i = 1; i <= n + 1; i++) {
        console.log(i)
        first = first.next;
    }
    // Move first to the end, maintaining the gap
    while (first != null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
    /*
    let dummy = new ListNode(0);
    dummy.next = head;
    let length  = 0;
    let first = head;
    while (first != null) {
        length++;
        first = first.next;
    }
    length -= n;
    first = dummy;
    while (length > 0) {
        length--;
        first = first.next;
    }
    first.next = first.next.next;
    return dummy.next;
    */

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

  console.log(head)
  
  console.log(removeNthNodeFromEnd(head,2))
  
  