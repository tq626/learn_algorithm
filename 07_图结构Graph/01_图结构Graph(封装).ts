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
export {

}