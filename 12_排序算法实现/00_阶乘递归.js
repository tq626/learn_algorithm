function f(sum) {
  if (sum < 0) return 0
  return sum + f(sum - 1)
}

console.log(f(100))