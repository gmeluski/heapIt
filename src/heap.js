export default class Heap {
  constructor () {
    this.stack = [0]
    this.heapCount = 0
  }

  get list () {
    return this.stack
  }

  getParentIndex(i) {
    return Math.floor(i / 2)
  }

  swapPositions(parentIndex, childIndex) {
    let placeHolder = this.stack[parentIndex]

    this.stack[parentIndex] = this.stack[childIndex]
    this.stack[childIndex] = placeHolder
  }

  percolateUp(index) {
    let parentIndex = this.getParentIndex(index)
    let currentIndex = index
    let placeHolder

    while (parentIndex  > 0) {
      // if the current index is less than the parent, swap
      if (this.stack[currentIndex] < this.stack[parentIndex]) {
        this.swapPositions(parentIndex, currentIndex)
      }

      // make the parentIndex the currentIndex and find the parentIndex
      currentIndex = parentIndex
      parentIndex = this.getParentIndex(currentIndex)
    }

  }

  insert(value) {
    this.stack.push(value)
    this.heapCount++
    this.percolateUp(this.heapCount)
  }


}

