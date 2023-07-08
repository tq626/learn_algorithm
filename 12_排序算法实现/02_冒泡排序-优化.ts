import { testSort, measureSort } from "hy-algokit"
import { swap } from "./utils"

function bubbleSort(arr: number[]): number[] {
  const n = arr.length

  // 每遍历一次最大的值将会放到最后会进行n次, 后面每次重新比较的时候就可以不再比较最后一项了
  // for (let j = 0; j < n - 1; j++) {
  //   if (arr[j] > arr[j+1]) {
  //     swap(arr, j, j+1)
  //   }
  // }

  // for (let j = 0; j < n - 1 - 1; j++) {
  //   if (arr[j] > arr[j+1]) {
  //     swap(arr, j, j+1)
  //   }
  // }

  // for (let j = 0; j < n - 1 - 2; j++) {
  //   if (arr[j] > arr[j+1]) {
  //     swap(arr, j, j+1)
  //   }
  // }

  for (let i = 0; i < n; i++) {
    let swaped = false
    // 内层循环是找到最大值
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
        swaped = true
      }
    }

    if (!swaped) break
  }
  return arr
}

// const nums = [10, 30, 15, 12, 8, 19, 39, 1, 3, 6]
// const newNums = bubbleSort(nums)
// console.log(newNums)
// testSort(bubbleSort)
measureSort(bubbleSort)