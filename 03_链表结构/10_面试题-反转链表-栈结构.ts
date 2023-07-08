import ListNode from "./面试题_ListNode";

function reverseList(head: ListNode | null): ListNode | null {

  if (head == null) return null

  if (head.next == null) return head

  // 数组模拟栈结构
  const stack: ListNode[] = []
  let current: ListNode | null = head
  while (current) {
    stack.push(current)
    current = current.next
  }

  // 依次从栈结构中取出, 依次放入到新的链表中
  const newHead: ListNode = stack.pop()!
  let newCurrentHead = newHead
  while (stack.length) {
    const node = stack.pop()!
    newCurrentHead.next = node
    newCurrentHead = newCurrentHead!.next
  }

  newCurrentHead.next = null

  return newHead
}

// 模拟数据进行测试
const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)

const newHead = reverseList(node1)

let current = newHead
while (current) {
  console.log(current.val)
  current = current.next
}

export {}