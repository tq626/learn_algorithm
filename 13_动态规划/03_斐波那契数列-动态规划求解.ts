function dpFib(n: number): number {
  // dpFib(2) = dpFib(0) + dpFib(1)
  // dpFib(3) = dpFib(1) + dpFib(2)
  // dpFib(4) = dpFib(3) + dpFib(2)
  // dpFib(5) = dpFib(4) + dpFib(3)
  // dpFib(n) = dpFib(n-1) + dpFib(n-2)

  const memo: number[] =  []
  memo[0] = 0
  memo[1] = 1
  for (let i = 2; i <= n; i++) {
    // 初始化状态0和1位置对应的数字是0和1
    // i = 2 memo[2] = memo[0] + memo[1]
    // i = 3 memo[3] = memo[2] + memo[1]
    // i = 4 memo[4] = memo[3] + memo[2]
    // i = n memo[n] = memo[n-1] + memo[n -2]
    memo[i] = memo[i - 1] + memo[i -2]
  }
  return memo[n]
}

console.log(dpFib(50))

export {

}