// const str = '   '
// console.log(str.length)
// str.trim()
// let str1 = str.replace(/\s+/g, "")
// console.log(str)
// if (str1) {
//   console.log('ssss')
// }

let values = [
  {no: 1},
  {
  no: 3
  },
  {no: 2}
]

values.sort((a,b) => {
 return  a.no - b.no 
})
console.log(values)