
/**
 * 跳台阶
 * 每次只能跳一节或者两节
 * 跳到第一节 只有一种跳法
 * 第二节 有 1+1， 2 两种
 * 第三节 有 1+1+1, 2+1, 1+2 三种
 * 第四节 有 1+1+1+1, 2+2, 1+1+2, 2+1+1, 1+2+1 五种
 * 第五节 有 1+1+1+1+1, 2+1+1+1, 1+1+1+2, 1+2+1+1, 1+1+2+1, 2+2+1, 2+1+2, 1+2+2 八种
 * 所以 f(n) = f(n-1) + f(n-2)
 * 
 * 要想跳到第n阶台阶则必须从n-1或者n-2跳过去, 所以跳到第n阶的跳法则为n-1和n-2跳法的总和
 * */ 
function jump(n:number): number {
  // 定义状态
  const dp: number[] = []

  // 设置初始化值
  dp[0] = 1
  dp[1] = 1

  // 由规律可得 dp[n] = dp[n-1] + dp[n-2]
  for (let i = 2; i <= n; i++) {
    // dp[0] = 1
    // dp[1] = 1
    // dp[2] = 2
    // dp[3] = 3
    // dp[4] = 5
    dp[i] = dp[i-1] + dp[i-2]
  }

  return dp[n]
}

console.log(jump(30))
export {

}