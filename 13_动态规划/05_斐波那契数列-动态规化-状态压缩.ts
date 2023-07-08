function dpFib(n: number): number {
  if (n <= 1) return n
  
  // 1.定义状态和初始化状态
  let prev = 0
  let cur = 1
  for (let i = 2; i <= n; i++) {
    //3.状态转移方程
    const newValue = prev + cur
    prev = cur
    cur = newValue
  }

  // 4.计算最终的结果
  return cur
}

console.log(dpFib(50))

export {

}