import { btPrint } from 'hy-algokit'

class AVLTreeNode<T> {
  value: T
  left: AVLTreeNode<T> | null = null
  right: AVLTreeNode<T> | null = null
  parent: AVLTreeNode<T> | null = null

  constructor(value: T) {
    this.value = value
  }

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

  //旋转操作: 右旋转
  rightRotation() {
    // 此处先判断该节点是该父节点的左子节点还是右子节点,因为下面将改变该节点的父节点
    const isLeft = this.isLeft
    const isRight = this.isRight

    // 1.处理pivot节点
    const pivot = this.left!
    pivot.parent = this.parent

    // 2.处理pivot的right
    this.left = pivot.right
    if (pivot.right) {
      pivot.right.parent = this  //将root作为pivot的父节点
    }

    // 3.处理this
    pivot.right = this
    this.parent = pivot

    // 4.挂载pivot
    if (!pivot.parent) { //pivot直接作为tree的根
      // pivot.parent = pivot 
      return pivot
    } else if (isLeft) { //pivot作为父节点的左子节点
      pivot.parent.left = pivot
    } else if (isRight) { //pivot作为父节点的右子节点
      pivot.parent.right = pivot
    }

    return pivot
  }

  // 左旋转
  leftRotation() {
    // 此处先判断该节点是该父节点的左子节点还是右子节点,因为下面将改变该节点的父节点
    const isLeft = this.isLeft
    const isRight = this.isRight

    // 1.处理pivot
    const pivot = this.right!
    pivot.parent = this.parent

    // 2.处理pivot的左子节点
    this.right = pivot.left
    if (pivot.left) {
      pivot.left.parent = this
    }

    // 3.处理this
    pivot.left = this
    this.parent = pivot

    // 4.挂载pivot
    if (!pivot.parent) {
      return pivot
    } else if (isLeft) {
      pivot.parent.left = pivot
    } else if (isRight) {
      pivot.parent.right = pivot
    }

    return pivot
  }

  
}

// const avlNode1 = new AVLTreeNode(24)

// avlNode1.right = new AVLTreeNode(26)
// avlNode1.right.parent = avlNode1
// avlNode1.right.right = new AVLTreeNode(28)
// avlNode1.right.right.parent = avlNode1.right

// const parent = new AVLTreeNode(20)
// parent.right = avlNode1
// avlNode1.parent = parent
// btPrint(parent)
// avlNode1.rightRotation()
// btPrint(parent)

// const avlNode1 = new AVLTreeNode(18)

// avlNode1.left = new AVLTreeNode(16)
// avlNode1.left.parent = avlNode1
// avlNode1.left.left = new AVLTreeNode(14)
// avlNode1.left.left.parent = avlNode1.left

// const parent = new AVLTreeNode(20)
// parent.left = avlNode1
// avlNode1.parent = parent
// btPrint(parent)
// avlNode1.rightRotation()
// btPrint(parent)


export {
  AVLTreeNode
}