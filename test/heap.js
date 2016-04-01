import {expect} from "chai"
import Heap from "../src/heap"

describe("the heap module", () => {
  let heap
  let finalHeap

  beforeEach(() => {
    heap = new Heap()
    finalHeap = [0, 5, 9, 11, 14]
  })

  it("is a class", () => {
    expect(Heap).to.be.a.class
  })

  it("places elements correctly", () => {
    heap.insert(14)
    heap.insert(9)
    heap.insert(11)
    heap.insert(5)

    expect(heap.list).to.eql(finalHeap)
  })

  it("builds a heap from an unsorted array", () => {
    heap.insert(1)
    // [0, 1]
    heap.insert(9)
    // [0, 1, 9]
    heap.insert(4)
    // [0, 1, 9, 4]
    heap.insert(13)
    // [0, 1, 9, 4, 13]
    heap.insert(5)
    // [0, 1, 9, 4, 13, 5]
    // [0, 1, 5, 4, 13, 9]

    // 0 1 5 4 13 9
    // 0 1 9 4 13
    // compare to parent
    // parent of 2 = 1
    // 1 -> 1
    // is the new item less than the parent
    // if so sift up
    // else sift it down
    // so sift down
    // 0 1 9 4 13
    // the child of 9 is 4 -> 13
    // 9 < 13
    // every thing ok
    heap.removeByIndex(2)
    expect(heap.list).to.eql([0, 1, 9, 4, 13])
  })
})

