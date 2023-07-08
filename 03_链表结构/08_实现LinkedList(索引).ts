import ILinkedList from "./ILinkedList"

// 1.创建Node节点类
class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

// 2.创建LinkedList的类
class LinkedList<T> implements ILinkedList<T> {
  head: Node<T> | null = null
  private size: number = 0

  get length(): number {
    return this.size
  }

  // 可以根据position获取当前的节点(不是节点的value， 而是获取节点)
  private getNode(position: number): Node<T> | null {
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }
    return current
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

      // 需要给current重新赋值
      current = previous!.next
      previous!.next = current?.next ?? null
    }

    this.size--
    return current?.value ?? null
  }


  get(position: number): T | null {
    // 越界问题
    if (position < 0 || position >= this.size) return null

    // 2.查找元素
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }

    // index xxx position
    return current?.value ?? null
  }

  // 更新方法
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) return false

    // 2.查找元素
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }
    current!.value = value
    return true
  }

  // 根据值, 获取对应位置的索引
  indexOf(value: T): number {
    // 从第一个节点开始, 向后遍历
    let current = this.head
    let index = 0
    while (current) {
      if (current.value === value) {
        return index
      }
      current = current.next
      index++
    }

    return -1
  }

  // 删除方法, 根据value删除方法
  remove(value: T): T | null {
    const index = this.indexOf(value)
    return this.removeAt(index)
  }

  isEmpty():boolean {
    return this.size === 0
  }
 }

const LinkedList1 = new LinkedList<string>()
LinkedList1.append('aaa')
LinkedList1.append('bbb')
LinkedList1.append('ccc'),
LinkedList1.append('ddd')

LinkedList1.insert('abc', 0)
LinkedList1.insert('cba', 0)

console.log('---------测试get------------')
console.log(LinkedList1.get(0))
console.log(LinkedList1.get(1))
console.log(LinkedList1.get(2))

console.log('----------测试update---------')
console.log(LinkedList1.update('tq', 2))
console.log(LinkedList1.update('ll', 3))

console.log('-----------测试indexOf---------')
console.log(LinkedList1.indexOf('tq'))
console.log(LinkedList1.indexOf('ll'))
LinkedList1.traverse()


export {
  Node,
  LinkedList
}