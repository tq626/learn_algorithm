import { btPrint } from 'hy-algokit'
import TreeNode from "../06_Tree树结构/09_二叉搜索树BSTree(删除-两个子节点)"

class AVLTreeNode<T> extends TreeNode<T> {
  value: T
  left: AVLTreeNode<T> | null = null
  right: AVLTreeNode<T> | null = null
  parent: AVLTreeNode<T> | null = null

  get isLeft() {
    return !!(this.parent && this.parent.left === this)
  }

  get isRight() {
    return !!(this.parent && this.parent.right === this)
  }

  private getHeight(): number {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0

    return Math.max(leftHeight, rightHeight) + 1
  }

  private getBalanceFactor(): number {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0
    return leftHeight - rightHeight
  }

  get isBalanced(): boolean {
    const factor = this.getBalanceFactor()
    return factor >= -1 && factor <= 1
  }

  // 获取更高子节点
  public get higherChild(): AVLTreeNode<T> | null {
    const leftHeight = this.left ? this.left.getHeight(): 0
    const rightHeight = this.right ? this.right.getHeight(): 0
    if (leftHeight > rightHeight) return this.left
    if (leftHeight < rightHeight) return this.right
    return this.isLeft ? this.left: this.right
  }
  
}


export {
  
}