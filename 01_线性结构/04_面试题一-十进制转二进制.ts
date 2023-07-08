import ArrayStack from "./02_实现栈结构Stack(重构)"


function decimalToBinary(decimal: number): string {
  // 1.创建一个栈, 用于存放余额
  const stack = new ArrayStack<number>()

  // 使用循环: 
  // while: (不确定次数, 只知道循环结束跳转)
  // for: (知道循环的次数时)
  while(decimal > 0) {
    // 1.创建一个栈, 用于存放
    const result = decimal % 2
    stack.push(result)

    decimal = Math.floor(decimal / 2)
  }

  // 将所有的余数放在了stack中, 依次取出即可
  let value = ''
  while (!stack.isEmpty()) {
    value += stack.pop()
  }

  return value
}

console.log(decimalToBinary(35))
console.log(decimalToBinary(100))