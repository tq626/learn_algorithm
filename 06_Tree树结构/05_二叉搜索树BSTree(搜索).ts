import Node from "./Node"
import { btPrint } from 'hy-algokit'

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
}

class BSTree<T> {
  private root: TreeNode<T> | null = null

  print() {
    btPrint(this.root)
  }
  // 插入数据的操作
  insert(value: T) {
    // 1.根据传入value创建Node(TreeNode)节点
    const newNode = new TreeNode<T>(value)

    // 2.判断当前是否已经有了根节点
    if (!this.root) {
      this.root = newNode //当前树为空
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    // 去左边继续查找空白位置
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else { // 去右边继续查找空白位置
      if (!node.right) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  // 遍历的操作
  // 前序遍历
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root)
  }
  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      console.log(node.value)
      console.log('1')
      this.preOrderTraverseNode(node.left)
      console.log('2')
      this.preOrderTraverseNode(node.right)
    }
  }

  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }
  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.inOrderTraverseNode(node.left)
      console.log(node.value)
      this.inOrderTraverseNode(node.right)
    }
  }

  // 后续遍历
  postOrdeerTraverse() {
    this.postOrderTraverseNode(this.root)
  }
  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.postOrderTraverseNode(node.left)
      this.postOrderTraverseNode(node.right)
      console.log(node.value)
    }
  }

  // 层序遍历
  levelOrderTraverse() {
    // 1.如果没有根节点，那么不需要遍历
    if (!this.root) return

    // 2.创建队列结构
    const queue: TreeNode<T>[] = []

    // 第一个节点是根节点
    queue.push(this.root)

    // 3.遍历队列中所有的节点(依次出队)
    while(queue.length) {
      // 3.1.访问节点的过程
      const current = queue.shift()!
      console.log(current.value)

      // 3.2.将左子节点放入到队列中
      if (current.left) {
        queue.push(current.left)
      }

      // 将右子节点放入到队列中
      if (current.right) {
        queue.push(current.right)
      }
    }
  }

  // 获取最值操作: 最大值 / 最小值
  getMaxValue(): T | null {
    let current = this.root
    while (current && current.right) {
      current = current.right
    }

    return current?.value ?? null
  }

  getMinValue(): T | null {
    let current = this.root
    while (current && current.left) {
      current = current.left
    }

    return current?.value ?? null
  }

  search(value: T): T | boolean {
    let current = this.root
    while (current) {
      if (current.value === value) return value 

      if (current!.value < value) {
        current = current.right
      }

      if (current!.value > value) {
        current = current!.left
      }
    }

    return false
  }
} 

const bst = new BSTree()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)

bst.print()
bst.preOrderTraverse()
export default bst