
class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  valueOf() {
    return this.age
  }
}

// 创建Person对象
const p1 = new Person("tq", 18)
const p2 = new Person('ll', 17)
const p3 = new Person('lm', 18)

console.log(p1 < p2)
console.log(p2 < p1)
console.log(p3 === p1) //因为指针指向的内存地址不一样, 所以不是同一个对象