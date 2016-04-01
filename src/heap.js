export default class Heap {
  constructor () {
    this.stack = [0]
    this.heapCount = 0
  }

  /**
  * getter for the stack
  *
  * @return {Array} the stack
  */
  get list () {
    return this.stack
  }

  /**
  * helper to return the parent index of an element in the stack
  *
  * @param {Number} the index
  * @return {Number} the parent
  */
  getParentIndex(i) {
    return Math.floor(i / 2)
  }

  /**
  * helper to swap two elements in the stack
  *
  * @param {Number} parentIndex
  * @param {Number} childIndex
  */
  swapPositions(parentIndex, childIndex) {
    let placeHolder = this.stack[parentIndex]

    this.stack[parentIndex] = this.stack[childIndex]
    this.stack[childIndex] = placeHolder
  }

  /**
  * find an element's proper value in the heap
  *
  * @param {Number}
  */
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

  /**
  * compare down the heap
  *
  * @param {Number} index
  */
  percolateDown(index) {
    let smallerChildIndex

    while (index * 2 < this.stack.length) {
      smallerChildIndex = this.getSmallerChildIndex(index)
      if (this.stack[index] > this.stack[smallerChildIndex]) {
        this.swapPositions(index, smallerChildIndex)
      }
      index = smallerChildIndex
    }

  }

  /**
  * helper to find the smallest of an index's two children
  *
  * @param {Number} parentIndex
  * @return {Number}
  */
  getSmallerChildIndex(parentIndex) {
    let firstIndex = parentIndex * 2
    let secondIndex = parentIndex * 2 + 1

    if (secondIndex > this.stack.length ||
      this.stack[firstIndex] < this.stack[secondIndex]) {
      return firstIndex
    }

    return secondIndex
  }

  /**
  * insert a value in the heap
  *
  * @param {Number}
  */
  insert(value) {
    this.stack.push(value)
    this.heapCount++
    this.percolateUp(this.heapCount)
  }

  /**
  * build a heap from an unsorted array
  *
  * @param {Array} the heap
  */
  removeByIndex(index) {
    let lastElement = this.stack.pop()
    let parentIndex = this.getParentIndex(index)
    this.stack[index] = lastElement

    if (this.stack[index] < this.stack[parentIndex]) {
      this.percolateUp(index)
    } else {
      this.percolateDown(index)
    }

  }

}

