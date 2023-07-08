/**
 * 
 */

function hashFunc(key: string, max: number): number {
  let hashCode = 0
  const length = key.length
  for (let i = 0; i < length; i++) {
    // 霍纳法则计算hashCode
    hashCode = 31 * hashCode + key.charCodeAt(i)
  }

  // 2.求出索引值
  const index = hashCode % max
  return index
}

// 测试哈希函数
console.log(hashFunc("abc", 8))
console.log(hashFunc("cba", 8))
console.log(hashFunc("nba", 8))
console.log(hashFunc("bca", 8))
console.log(hashFunc("bac", 8))