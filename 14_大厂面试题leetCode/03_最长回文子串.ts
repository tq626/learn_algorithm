function longestPalindrome(s: string): string {
  const n = s.length

  // 边界判断的情况
  if (s.length <= 1) return s

  // 定义初始化的start和end
  let start = 0
  let end = 0
  for (let i = 0; i < n; i++) {
    const len1 = centerExpand(s, i, i)
    const len2 = centerExpand(s, i, i + 1)
    // 取到较长字符串的长度
    const len = Math.max(len1, len2)

    if (len > end - start) {
      const left = i - Math.floor((len - 1) / 2)
      const right = i + Math.floor(len / 2)

      // 新的长度比原来保存的长度要长, 就重新赋值
      start = left
      end = right
    }
  }

  return s.substring(start, end + 1)
}

function centerExpand(s: string, left: number, right: number): number {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
  }
  return right - left - 1
}

export {

}