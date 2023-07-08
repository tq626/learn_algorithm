import ArrayQueue from "./01_实现 队列结构Queue";

function hotPotato(names: string[], num: number) {
  // 1.创建队列结构
  const queue = new ArrayQueue<string>()

  // 2.将所有的name入栈操作
  for (const name of names) {
    queue.enqueue(name)
  }

  // 3.淘汰的规则
  while (queue.size() > 1) {
    for (let i = 1; i < num; i++) {
      const name = queue.dequeue()
      if (name) queue.enqueue(name)
    }
    // 3.淘汰
   queue.dequeue()
  }
  
  return queue.dequeue()
}

const leftName = hotPotato(["tq", "liangliang", "curry", "james", "hadeng", "kobe", "weijinsi"], 4)
console.log(leftName)

