export function swap(arr: number[], i: number, j: number) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

export function isSorted(arr: number[]): boolean{
  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) return false
  }
  return true
}

// 编写一个工具测试排序算法
type SortAlgoFn = (arr: number[]) => number[]
export function testSort(sortFn: SortAlgoFn) {

  // 1.随机一个长度为10的整数(数组中存放多个数字)
  const nums = Array.from({ length: 10 }, () => {
    return Math.floor(Math.random() * 200)
  })

  console.log('排序前的原数组:', nums)
  const sortNums = sortFn(nums)
  console.log('排序后的新数组:', sortNums)
  console.log('当前是否已经排好序:', isSorted(sortNums))
}