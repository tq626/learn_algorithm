function longestCommonPrefix(strs: string[]): string {
  // 如果数组为空,直接返回即可
  if (strs.length === 0) return "";

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const s = strs[i];

    while (s.indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
    }

    if (prefix.length === 0) {
      return "";
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(["abc", "abcss", "abcd"]));
export {};
