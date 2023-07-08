import ListNode from "./面试题_ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  // 如果使用的是递归, 那么递归必须要有结束条件
  if (head === null || head.next === null) return head
  const newHead = reverseList(head?.next ?? null)

  // 完成要做的操作是在这个位置
  // 每次来到这都是head指向的都是链表中倒数第二个节点
  head.next.next = head
  head.next = null

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