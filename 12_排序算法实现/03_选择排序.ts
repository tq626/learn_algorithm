// import { swap, testSort } from "./utils";
import { testSort, measureSort, swap } from "hy-algokit"

function selectionSort(arr: number[]): number[] {
  const n = arr.length

  // 第一次
  // let minIndex = 0
  // for (let j = 1; j < n; j++) {
  //   if (arr[j] < arr[minIndex]) {
  //     minIndex = j
  //   }
  // }
  // swap(arr, 0, minIndex)
  // 经过一轮循环就能找到最小值

   // 第二次
  //  let minIndex = 1
  //  for (let j = 1 + 1; j < n; j++) {
  //    if (arr[j] < arr[minIndex]) {
  //      minIndex = j
  //    }
  //  }
  // swap(arr, 0, minIndex)


  // 第三次
  //  let minIndex = 1
  //  for (let j = 1 + 2; j < n; j++) {
  //    if (arr[j] < arr[minIndex]) {
  //      minIndex = j
  //    }
  //  }
  // swap(arr, 0, minIndex)

  for (let i = 0; i < n; i++) {
    let minIndex = i
    for (let j = 1 + i; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }

  return arr
}

// testSort(selectionSort)
measureSort(selectionSort)