import { testSort } from "hy-algokit";

function insertionSort(arr: number[]): number[] {

  const n = arr.length

  for (let i = 1; i < n; i++) {
    // 内层循环
    const newNum = arr[i] //记录每一个索引对应的值
    let j = i - 1 //记录每次前一个索引
    // 当后面一个值小于前面一个值时, 就依次将前一个值往后面一个位置
    while (arr[j] > newNum && j >= 0) {
      arr[j + 1] = arr[j]
      j--
    }
    // 直到找到前面的值小于后面的值时, 就把newNum放到当前值的后一个位置, 相当于前面大于newNum的值依次往后面挪动, 直到找到比newNum值小的时候,就把newNum插进去
    arr[j + 1] = newNum
  }
  
  return arr
}

testSort(insertionSort)