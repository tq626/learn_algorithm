import { testSort, measureSort } from 'hy-algokit'

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr

  // 1.分解(divide): 对数组进行分解(分解成两个小数组)
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)

  // 1.2.递归切割leftArr和rightArr
  const newLeftArr = mergeSort(leftArr)
  const newRightArr = mergeSort(rightArr)

  // 2.合并(merge): 将两个子数组进行合并(双指针)
  // 2.1.定义双指针
  const newArr: number[] = []
  let i = 0 
  let j = 0
  // 左右两边只会有一边能够加进去, 另外一边的得通过下面得逻辑才能加入如果左边小于右边则i++, 右边的则进入不到while循环中
  while (i < newLeftArr.length && j < newRightArr.length) {
    if (newLeftArr[i] <= newRightArr[j]) {
      newArr.push(newLeftArr[i])
      i++
    } else {
      newArr.push(newRightArr[j])
      j++
    }
  }

  // 2.2.判断是否某一个数组中还有剩余的元素
  // 上面左边没加入进去则在这加入进去
  if (i < newLeftArr.length) {
    newArr.push(...newLeftArr.slice(i))
  }

  // 上面右边没加入进去则在这加入进去
  if (j < newRightArr.length) {
    newArr.push(...newRightArr.slice(j))
  }

  return newArr
}

// testSort(mergeSort)
measureSort(mergeSort)