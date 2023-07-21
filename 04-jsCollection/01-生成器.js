// 作用：异步编程的一种解决方案，将异步结果同步返回。终止提前返回
function* test() {
  yield 1
  yield 2
  return 3
}

const iterator = test()
console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
