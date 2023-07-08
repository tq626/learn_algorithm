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

  // 下滤
  private heapify_down() {
    // 3.1.定义索引位置
    let index = 0

    while (2 * index + 1 < this.length) {
      // 3.2.找到左右子节点
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2

      // 3.3.找到左右子节点较大的值
      let largerIndex = leftChildIndex
      if (rightChildIndex < this.length && this.data[rightChildIndex] > this.data[leftChildIndex]) {
        largerIndex = rightChildIndex
      }

      // 3.4.较大的值和index位置进行比较
      if (this.data[index] >= this.data[largerIndex]) {
        break
      }

      // 3.5.交换位置
      this.swap(index, largerIndex)
      index = largerIndex
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
    // 1.判断元素的个数为0或者1的情况
    if (this.length === 0) return undefined
    if (this.length === 1) {
      this.length--
      return this.data.shift()!
    }

    // 2.提取并且需要返回的最大值
    const topValue = this.data[0]
    this.data[0] = this.data.pop()!
    this.length--

    // 3.维护最大堆的特性: 下滤操作
    this.heapify_down()
    
    return topValue
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