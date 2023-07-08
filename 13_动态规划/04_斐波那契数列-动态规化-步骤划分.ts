function dpFib(n: number): number {
  
  // 1.定义状态
  // dp保留斐波那契额数列中每一个位置对应的值(状态)
  // dp[x]表示的就是x位置对应的值(状态)
  const dp: number[] =  []

  // 3.设置初始化状态: dp[0]/dp[1]初始化状态
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    // 初始化状态0和1位置对应的数字是0和1
    // i = 2 memo[2] = memo[0] + memo[1]
    // i = 3 memo[3] = memo[2] + memo[1]
    // i = 4 memo[4] = memo[3] + memo[2]
    // i = n memo[n] = memo[n-1] + memo[n -2]

    //2. 状态转移方程: dp[i] = dp[i -1] + dp[i-2]
    // 状态转移方程一般情况都是写在循环(for/while)中
    dp[i] = dp[i - 1] + dp[i -2]
  }

  // 4.计算最终的结果
  return dp[n]
}

console.log(dpFib(50))

export {

}