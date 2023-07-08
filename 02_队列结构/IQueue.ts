interface IQueue<T> {
  // 入队方法
  enqueue(element: T): void
  // 出队方法
  dequeue():T | undefined
  // peek
  peek(): T | undefined
  // 判断是否为空
  isEmpty(): boolean
  // 元素的个数
  size(): number
}

export default IQueue