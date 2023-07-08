class HashTable<T> {
  // 创建一个数组，用来存放链指法的链(数组)
  private storage: [string, T][][] = []

  //定义数组的长度
  private length: number = 7
  // 记录已经存放元素的个数
  private count: number = 0

  private hashFunc(key: string, max: number): number {
    let hashCode = 0
    const length = key.length
    for (let i = 0; i < length; i++) {
      // 霍纳法则计算hashCode
      hashCode = 31 * hashCode + key.charCodeAt(i)
    }
  
    // 2.求出索引值
    const index = hashCode % max
    return index
  }

  private resize(newLength: number) {
    // 设置原来的长度
    this.length = newLength

    // 获取原来所有的数据, 并且重新放入到新的容量数组中
    // 1. 对数据进行初始化操作
    const oldStorage = this.storage
    this.storage = []
    this.count = 0

    // 2.获取原来的数据, 放入到新的数组中
    oldStorage.forEach(bucket => {
      if (!bucket) return

      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i]
        this.put(tuple[0], tuple[1])
      }
    }) 
  }

  // 插入/修改
  put(key: string, value: T) {
    // 1. 根据key获取数组中对应的索引值
    const index = this.hashFunc(key, this.length)

    //2 取出索引值对应位置的数组(痛)
    let bucket: [string, T][] = this.storage[index]

    //3. 判断bucket是否有值
    if (!bucket) {
      bucket = []
      this.storage[index] = bucket
    }

    // 4.确定已经有一个数组了, 但是数组中是否已经存在key是不确定的
    let isUpdate = false
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      if (tupleKey === key) {
        // 跟新的操作
        tuple[1] = value
        isUpdate = true
      }
    }

    // 5.如果上面的代码没有进行覆盖, 那么在该位置进行添加
    if (!isUpdate) {
      bucket.push([key, value])
      this.count++

      // 发现loadFactor比例已经大于0.75, 那么就直接扩容
      const loadFactor = this.count / this.length
      if (loadFactor > 0.75) {
        this.resize(this.length * 2)
      }
    }
  }

  // 获取值
  get(key: string): T | undefined {
    // 根据key获取索引值index
    const index = this.hashFunc(key, this.length)

    // 2.获取bucket(桶)
    const bucket = this.storage[index]
    if (!bucket) return undefined

    // 3.对bucket进行遍历
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      if (tupleKey === key) {
        return tuple[1]
      }
    }

    return undefined
  }

  // 删除操作
  detele(key: string): T | undefined {
    // 1.获取索引的位置
    const index = this.hashFunc(key, this.length)

    // 2.获取bucket(桶)
    const bucket = this.storage[index]
    if (!bucket) return undefined

    // 3.遍历桶数组
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      if (tupleKey === key) {
        bucket.splice(i, 1)
        this.count--

        // 发现loadFactor比例已经小于0.25, 那么就直接缩容
        const loadFactor = this.count / this.length
        if (loadFactor < 0.25 && this.length > 7) {
          this.resize(Math.floor(this.length / 2))
        }

        return tuple[1]
      }
    }

    return undefined
  }

  //扩容和缩容操作

}

const hashTable = new HashTable()
hashTable.put("aaa", 100)
hashTable.put("aaa", 88)
hashTable.put("bbb", 200)
hashTable.put("ccc", 300)
hashTable.put("abc", 99)

console.log(hashTable.get("aaa"))
console.log(hashTable.get("ccc"))
console.log(hashTable.get('abc'))

console.log(hashTable.detele("ccc"))
console.log(hashTable.detele("abc"))

console.log(hashTable.get("ccc"))

export default hashTable