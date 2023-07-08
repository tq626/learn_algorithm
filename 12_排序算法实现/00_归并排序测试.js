import { measureSort } from 'hy-algokit'

function mergeSort(arr) {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid) 

  const newLeftArr = mergeSort(leftArr)
  const newRightArr = mergeSort(rightArr)

  console.log(newLeftArr, 'newLeftArr')
  console.log(newRightArr, 'newRightArr')

  const newArr = []
  let i = 0
  let j = 0
  while (i < newLeftArr.length && j < newRightArr.length) {
    if (newLeftArr[i] <= newRightArr[j]) {
      newArr.push(newLeftArr[i])
      i++
    } else {
      newArr.push(newRightArr[j])
      j++
    }
  }

  if (i < newLeftArr.length) {
    newArr.push(...newLeftArr.slice(i))
  }

  if (j < newRightArr.length) {
    newArr.push(...newRightArr.slice(j))
  }

  return newArr
}


// console.log(mergeSort([14, 18, 20, 50, 60, 21, 29, 40, 80]))
measureSort(mergeSort)