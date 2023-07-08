/**
 * @param num
 * @return 
*/

function isPrime(num: number): boolean {
  // 质数的特点: 只能被1和自己整除
  // 例: 如果传入的是8 则需要遍历 2 ~ 8-1
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  } 

  return true
}

console.log(isPrime(8))
console.log(isPrime(12))
console.log(isPrime(7))