import { BSTree, TreeNode } from './00_TreeNode'
import { AVLTreeNode } from './05_封装AVLTreeNode(左旋转)'
export class AVLTree<T> extends BSTree<T> {
  // 重写createNode方法
  protected createNode(value: T): TreeNode<T> {
    return new AVLTreeNode(value)
  }

  // 如何去找到不平衡的节点
  protected checkBalance(node: AVLTreeNode<T>): void {
    let current = node.parent
    while (current) {
      if (!current.isBalanced) {
        this.rebalance(current)
      }
      current = current.parent
    }
  }

  /**
   * 假设已经找到了, 那么我们如何让这个节点变得平衡
   * 根据不平衡的节点的情况(LL/RR/LR/RL)让子树平衡
   * @param root 找到不平衡的节点
  */
  rebalance(root: AVLTreeNode<T>) {
    const pivot = root.higherChild //此处获取到的是子节点更多越重的那一边的
    const current = pivot?.higherChild

    let resultNode: AVLTreeNode<T> | null = null
    if (pivot?.isLeft) { //L: left
      if (current?.isLeft) {// LL: left left
        resultNode = root.rightRotation()
      } else { //LR：left right
        pivot.leftRotation()
        resultNode = root.rightRotation() //取最后一次结果
      }
    } else { //R: right
      if (current?.isLeft) {//RL: right left
        pivot?.rightRotation()
       resultNode = root.leftRotation()
      } else {//RR: right right
        resultNode = root.leftRotation()
      }
    }

    if (!resultNode.parent) {
      this.root = resultNode
    }
  }
}

const avlTree = new AVLTree<number>()

for (let i = 0; i < 20; i++) {
  avlTree.insert(Math.floor(Math.random() * 200))
}
avlTree.print()
