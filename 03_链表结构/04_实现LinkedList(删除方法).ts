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

  // 插入方法
  insert(value: T,position: number): boolean {
    if (position < 0 || position > this.size) return false

    // 2.根据value创建新的节点
    const newNode = new Node(value)

    // 3.判断是否需要插入头部
    if (position === 0) {
      newNode.next = this.head
       this.head = newNode
    } else {
      let current = this.head
      let previous: Node<T> | null = null
      let index = 0
      while (index++ < position && current) {
        previous = current
        current = current.next
      }

      // index === position
      newNode.next = current
      previous!.next = newNode
    }

    this.size++
    
    return true
  }

  // 删除方法:
  removeAt(position: number): T | null {
    if (position < 0 || position >= this.size) return null

    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null
    } else {  
      let previous: Node<T> | null = null
      let index = 0
      while (index++ < position && current) {
        previous = current
        current = current.next
      }

      previous!.next = current?.next ?? null
    }

    this.size--
    return current?.value ?? null
  }

  
}

const LinkedList1 = new LinkedList<string>()
LinkedList1.append('aaa')
LinkedList1.append('bbb')
LinkedList1.append('ccc'),
LinkedList1.append('ddd')

LinkedList1.insert('abc', 0)
LinkedList1.insert('cba', 0)

LinkedList1.traverse()

LinkedList1.removeAt(2)
LinkedList1.traverse()

console.log(LinkedList1.removeAt(3))
LinkedList1.traverse()
export {
  Node,
  LinkedList
}