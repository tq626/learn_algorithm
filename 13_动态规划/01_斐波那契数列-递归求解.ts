function fib(num: number): number {
  if (num <= 1) return num
  return  fib(num - 1) + fib(num - 2)
}

console.log(fib(50))

export {

}