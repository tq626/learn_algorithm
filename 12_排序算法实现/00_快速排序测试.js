import { swap } from 'hy-algokit'

function quickSort(arr) {
  partition(0, arr.length - 1)

  function partition(left, right) {
    if (left > right) return

    // 1.找到基准元素(pivot轴心)
    const pivot = arr[right]

    // 2.双指针进行交换操作(左边都是比pivot小的数, 右边都是比pivot大的数)
    let i = left
    let j = right - 1

    while (arr[i] < pivot) {
      i++
    }

    while (arr[j] > pivot) {
      j--
    }

    // 说明我们已经找到比pivot大的元素的索引i和比pivot小的元素的索引j
    if (i <= j) {
      swap(arr, i, j)
      i++
      j--
    }
    

  }
}