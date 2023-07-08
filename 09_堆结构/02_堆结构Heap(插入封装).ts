class Heap<T> {
  // 属性
  private data: T[] = []
  private length: number = 0

  // 私有工具方法
  private swap(i: number, j: number) {
    const temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }

  // 上滤
  private heapify_up() {
    let index = this.length - 1
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      if (this.data[index] <= this.data[parentIndex]) {
        break
      }
      this.swap(index, parentIndex)
      index = parentIndex
    }
  }

  // 方法
  insert(value: T) {
    // 将元素添加到数组的尾部
    this.data.push(value)
    this.length++

    // 2.维护最大堆的特性(最后位置元素需要进行上滤操作)
    this.heapify_up()
    
  } 

  extract(): T | undefined {
    return 
  }

  peek(): T | undefined {
    return this.data[0]
  }

  size() {
    return this.length
  }

  isEmpty() {
    return this.length === 0
  }

  buildHeap(arr: []) {

  }
}

const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7]



export {

}