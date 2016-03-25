import {expect} from "chai"
import Heap from "../src/heap"

describe("the heap module", () => {
  let heap

  beforeEach(() => {
    heap = new Heap()
  })

  it("is a class", () => {
    expect(Heap).to.be.a.class
  })

  it("places elements correctly", () => {
    let finalHeap = [0, 5, 9, 11, 14]

    heap.insert(14)
    heap.insert(9)
    heap.insert(11)
    heap.insert(5)

    expect(heap.list).to.eql(finalHeap)
  })
})

