class Graph<T> {
  // 顶点
  private verteces: T[] = []
  // 边: 邻接表
  private adjList: Map<T, T[]> = new Map()

  // 添加顶点和边的方法
  addVertex(vertex: T) {
    // 将顶点添加到数组中保存
    this.verteces.push(vertex)
    // 创建一个邻接表中的数组
    this.adjList.set(vertex, [])
  }

  // 添加边
  addEdge(v1: T, v2: T) {
    this.adjList.get(v1)?.push(v2)
    this.adjList.get(v2)?.push(v1)
  }

  // 遍历方法
  traverse() {
    this.verteces.forEach(vertex => {
      const edges = this.adjList.get(vertex)

      console.log(`${vertex} -> ${edges?.join(" ")}`)
    })
  }

  // 广度优先算法
  bfs() {
    // 1.判断是否有顶点
    if (this.verteces.length === 0) return

    // 创建队列结构访问每一个顶点
    const queue: T[] = []
    queue.push(this.verteces[0]) 

    // 3.创建Set结构, 记录每一个顶点是否被访问过
    const visited = new Set()
    visited.add(this.verteces[0])

    // 4.遍历队列中每一个顶点
    while (queue.length) {
      // 访问队列中的第一个顶点
      const vertex = queue.shift()!
      console.log(vertex)

      // 相邻的顶点
      const neighbors = this.adjList.get(vertex)
      if (!neighbors) continue
      for (const nei of neighbors) {
        if (!visited.has(nei)) {
          visited.add(nei)
          queue.push(nei)
        }
      }

    }
  }

  // 深度优先算法
  dfs() {
    // 判断有没有顶点, 没有则直接返回
    if (this.verteces.length === 0) return

    // 2.创建栈结构
    const stack: T[] = []
    stack.push(this.verteces[0])

    // 3.创建Set结构
    const visited: Set<T> = new Set()
    visited.add(this.verteces[0])

    // 从第一个顶点开始访问
    while (stack.length) {
      const vertex = stack.pop()!
      console.log(vertex)

      const neighbors = this.adjList.get(vertex)
      if (!neighbors) continue
      for (let i = neighbors.length - 1; i >= 0; i--) {
        if (!visited.has(neighbors[i])) {
          visited.add(neighbors[i])
          stack.push(neighbors[i])
        }
      }
    }
  }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addVertex("G")
graph.addVertex("H")
graph.addVertex("I")

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')

graph.traverse()

graph.bfs()
graph.dfs()

export {

}