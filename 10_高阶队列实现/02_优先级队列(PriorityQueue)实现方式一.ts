import Heap from '../09_堆结构/05_堆结构Heap(最大堆和最小堆整合)'

// 1.创建PriorityNode
class PriorityNode<T> {
  priority: number
  value: T
  constructor(value: T, priority: number) {
    this.value = value
    this.priority = priority
  }

  valueOf() {
    return this.priority
  }
}

// 创建PriorityQueue
class PriorityQueue<T> {
  private heap: Heap<PriorityNode<T>> = new Heap()

  // 入队
  enqueue(node: PriorityNode<T>) {
    this.heap.insert(node)
  }

  // 出队
  dequeue(): T | undefined {
    return this.heap.extract()?.value
  }

  peek(): T | undefined {
    return this.heap.peek()?.value
  }

  isEmpty() {
    return this.heap.isEmpty()
  }

  size() {
    return this.heap.size()
  }

}


const p1 = new PriorityNode("tq", 12)
const p2 = new PriorityNode('ll', 18)
const p3 = new PriorityNode('kobe', 35)

const pQueue = new PriorityQueue<string>()
pQueue.enqueue(p1)
pQueue.enqueue(p2)
pQueue.enqueue(p3)

while (!pQueue.isEmpty()) {
  console.log(pQueue.dequeue())
}