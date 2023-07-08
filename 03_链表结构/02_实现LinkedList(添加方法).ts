// 1.创建Node节点类
class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

// 2.创建LinkedList的类
class LinkedList<T> {
  head: Node<T> | null = null
  private size: number = 0

  get length() {
    return this.size
  }

  // 追加节点
  append(value: T) {
    // 1.根据value创建一个新节点
    const newNode = new Node<T>(value)

    // 2.判断this.head是否为空
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }

      // current肯定是指向最后一个节点的
      current.next = newNode
    }

    this.size++
  }

  // 遍历链表的方法
  traverse() {
    const values: T[] = []

    let current = this.head
    while (current) {
      values.push(current.value)
      // console.log(current.value)
      current = current.next
    }
   console.log(values.join('->'))
  }
  

}

const LinkedList1 = new LinkedList<string>()
LinkedList1.append('aaa')
LinkedList1.append('bbb')
LinkedList1.append('ccc'),
LinkedList1.append('ddd')


LinkedList1.traverse()

export {
  Node,
  LinkedList
}