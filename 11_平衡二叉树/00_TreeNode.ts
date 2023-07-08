import Node from "../06_Tree树结构/Node"
import { btPrint } from 'hy-algokit'


export class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
  parent: TreeNode<T> | null = null

  get isLeft() {
    return !!(this.parent && this.parent.left === this)
  }

  get isRight() {
    return !!(this.parent && this.parent.right === this)
  }
}

export class BSTree<T> {
  protected root: TreeNode<T> | null = null

  print() {
    btPrint(this.root)
  }

  protected createNode(value: T): TreeNode<T> {
    return new TreeNode(value)
  }

  // 搜索重构
  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root
    let parent: TreeNode<T> | null = null
    while (current) {
      // 如果 找到当前节点则直接return
      if (current.value === value) {
        return current
      }
      // 2.继续查找
      parent = current
      if (current.value < value) {
        current = current.right
      } else {
        current = current.left
      }
      
      // 如果current有值, 那么current保存其父节点
      if (current) current.parent = parent
    }

    return null
  }

  search(value: T): T | boolean {
    return !!this.searchNode(value)
  }


  // 检查是否平衡
  protected checkBalance(node: TreeNode<T>) {}

  // 插入数据的操作
  insert(value: T) {
    // 1.根据传入value创建Node(TreeNode)节点
    // const newNode = new TreeNode<T>(value)
    const newNode = this.createNode(value)

    // 2.判断当前是否已经有了根节点
    if (!this.root) {
      this.root = newNode //当前树为空
    } else {
      this.insertNode(this.root, newNode)
    }

    // 3.检查树是否平衡
    this.checkBalance(newNode)
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    // 去左边继续查找空白位置
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode
        newNode.parent = node
      } else {
        this.insertNode(node.left, newNode)
      }
    } else { // 去右边继续查找空白位置
      if (!node.right) {
        node.right = newNode
        newNode.parent = node
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

  // 获取后继节点的方法
  private getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
    // 获取右子树
    let current = delNode.right
    let successor: TreeNode<T> | null = null
    while (current) {
      successor = current
      current = current.left

      // 给successor的parent赋值
      if (current) {
        current.parent = successor
      }
    }

    // 当后继节点不等于删除节点的右子节点时
    // 该步骤有图详解请参照图(删除节点(右节点不为后继节点的情况))
    if (successor !== delNode.right) {
      successor!.parent!.left = successor!.right
      successor!.right = delNode.right
    }

    // 找到后继节点
    console.log("删除节点:", delNode.value, "后继节点", successor?.value)
    
    //必不可少的操作：将删除节点的left赋值给后继节点的left 
    successor!.left = delNode.left 

    return successor!
  }

  // 删除操作
  remove(value: T): boolean {
    // 1.搜索: 当前是否有这个value
    const current = this.searchNode(value)
    if (!current) return false

    // console.log("当前节点:", current.value, "父节点:", current.parent?.value)
    if (current.left === null && current.right === null) {
      if (current === this.root) { // 根节点
        this.root = null
      } else if (current.isLeft) { //父节点的左子节点
        current.parent!.left = null
      } else {
        current.parent!.right = null
      }
    }
    
    // 3.当前节点只有一个子节点, 只有左子节点
    else if (current.right === null) {
      if (current === this.root) {
        this.root = current.left
      } else if (current.isLeft) {
        current.parent!.left = current.left
      } else if (current.isRight) {
        current.parent!.right = current.left
      }
    }

    // 4.当前节点只有一个子节点, 只有右子节点
    else if (current.left === null) {
      if (current === this.root) {
        this.root = current.right
      } else if (current.isLeft) {
        current.parent!.left = current.right
      } else if (current.isRight) {
        current.parent!.right = current.right
      }
    }

    // 有两个子节点
    else {
      const successor = this.getSuccessor(current)
      if (current === this.root) {
        this.root = successor
      } else if (current.isLeft) {
        current.parent!.left = successor
      } else if (current.isRight) {
        current.parent!.right = successor
      }
    }

    return true
  }
} 

// const bst = new BSTree()
// bst.insert(11)
// bst.insert(7)
// bst.insert(15)
// bst.insert(5)
// bst.insert(3)
// bst.insert(9)
// bst.insert(8)
// bst.insert(10)
// bst.insert(13)
// bst.insert(12)
// bst.insert(14)
// bst.insert(20)
// bst.insert(18)
// bst.insert(25)
// bst.insert(6)

// bst.print()
// // bst.preOrderTraverse()

// bst.remove(11)
// bst.print()
// bst.remove(15)
// bst.print()
// bst.remove(7)
// bst.print()

// export default bst