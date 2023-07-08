
//封装栈
class Stack {
  // 定义一个数组/ 链表, 用于存储元素
  private data: any[] = []

  // 实现栈中相关的操作方法
  // push方法: 将一个元素压入到栈中
  push(element: any): void {
    this.data.push(element)
  }

  // pop方法：将栈顶的元素弹出栈(返回出去, 并且从栈顶移除掉)
  pop(): any {
    return this.data.pop()
  }

  // peek方法: 看一眼栈顶元素，但是不进行任何操作
  peek(): any {
    return this.data[this.data.length -1]
  }

  // isEmpty: 判断栈是否为空
  isEmpty(): boolean {
    return this.data.length === 0
  }

  // 返回栈的数据个数
  size(): number {
    return this.data.length
  }
}

const stack1 = new Stack()

export {}