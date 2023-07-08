import ArrayQueue from "../02_队列结构/01_实现队列结构Queue";


class ArrayDeque<T> extends ArrayQueue<T> {
  addFront(value: T) {
    this.data.unshift(value)
  }
  removeBack(): T | undefined {
    return this.data.pop()
  }
}



export {

}