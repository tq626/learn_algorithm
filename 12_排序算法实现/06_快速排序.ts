import { swap, testSort, measureSort } from 'hy-algokit'
function quickSort(arr: number[]): number[] {

  partition(0, arr.length - 1)

  function partition(left: number, right: number) {
    if (left >= right) return

    // 1.找到基准元素pivot
    const pivot = arr[right]

    // 2.利用双指针进行交换操作(左边都是比pivot小的数字, 右边都是比pivot大的数字)

    let i = left
    let j = right - 1

    while (i <= j) {

      // 找到比pivot大的数字
      while (arr[i] < pivot) {
        i++
      }
      // 找到比pivot小的数字
      while (arr[j] > pivot) {
        j--
      }

      if (i <= j) {
        swap(arr, i, j)
        i++
        j--
      }
    }

    // 将pivot放在正确的位置
    swap(arr, i, right)
    // 分别递归左边和右边的参数
    // 左边参数
    partition(left, j)
    // 右边参数
    partition(i+1, right)

  }

  return arr
}

// testSort(quickSort)
measureSort(quickSort, 100000)