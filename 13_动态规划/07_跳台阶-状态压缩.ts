function jump(n:number): number {
  // 定义状态  设置初始化值
  let pre = 1
  let cur = 1

  // 由规律可得 dp[n] = dp[n-1] + dp[n-2]
  for (let i = 2; i <= n; i++) {
    let newValue = pre + cur
    pre = cur
    cur = newValue
  }

  return cur
}

console.log(jump(30))
export {

}