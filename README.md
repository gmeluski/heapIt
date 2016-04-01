# heapIt

a minimum heap!

## To run tests
- `install mocha -g`
- `npm test` or `mocha --compilers js:babel-register --recursive`

## Usage
It is important to note that `.default` has to be referenced explicitly in order to obtain the class from the module. [More info here](http://stackoverflow.com/questions/33505992/babel-6-changes-how-it-exports-default).

```
var Heap = require("heap-it").default
var heap = new Heap()

heap.insert(14)
heap.insert(9)
heap.insert(11)
heap.insert(5)

console.log(heap.list)
// [ 0, 5, 9, 11, 14 ]
```
