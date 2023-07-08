import { BSTree } from './00_TreeNode'
import { AVLTreeNode } from './05_封装AVLTreeNode(左旋转)'
export class AVLTree<T> extends BSTree<T> {
  // 重写createNode方法
  protected createNode(value: T): AVLTreeNode<T> {
    return new AVLTreeNode(value)
  }

  rebalance(root: AVLTreeNode<T>) {
    const pivot = root.higherChild //此处获取到的是子节点更多越重的那一边的
    const current = pivot?.higherChild

    if (pivot?.isLeft) { //L: left
      if (current?.isLeft) {// LL: left left
        root.rightRotation()
      } else { //LR：left right
        pivot.leftRotation()
        root.rightRotation() //取最后一次结果
      }
    } else { //R: right
      if (current?.isLeft) {//RL: right left
        pivot?.rightRotation()
        root.leftRotation()
      } else {//RR: right right
        root.leftRotation()
      }
    }

  }
}

const avlTree = new AVLTree<number>()

avlTree.insert(13)
avlTree.insert(25)
avlTree.insert(10)
avlTree.insert(29)
avlTree.insert(31)
avlTree.print()
