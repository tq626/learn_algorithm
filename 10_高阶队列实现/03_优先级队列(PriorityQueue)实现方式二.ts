import Heap from '../09_堆结构/05_堆结构Heap(最大堆和最小堆整合)'


// 创建PriorityQueue
class PriorityQueue<T> {
  private heap: Heap<T> = new Heap()

  // 入队
  enqueue(node: T) {
    this.heap.insert(node)
  }

  // 出队
  dequeue(): T | undefined {
    return this.heap.extract()
  }

  peek(): T | undefined {
    return this.heap.peek()
  }

  isEmpty() {
    return this.heap.isEmpty()
  }

  size() {
    return this.heap.size()
  }

}

class Student {
  name: string
  score: number
  constructor(name: string, score: number) {
    this.name = name
    this.score = score
  }

  valueOf() {
    return this.score
  }
}

const pQueue = new PriorityQueue<Student>()
const p1 = new Student("tq", 99)
const p2 = new Student("ll", 98)
const p3 = new Student('kobe', 88)

pQueue.enqueue(p1)
pQueue.enqueue(p2)
pQueue.enqueue(p3)

while (!pQueue.isEmpty()) {
  console.log(pQueue.dequeue())
}