function* lazyCalculation() {
  let i = 0
  while (true) {
    yield i++
  }
}

const iterator = lazyCalculation()
console.log(iterator.next().value) // 0
console.log(iterator.next().value) // 1
console.log(iterator.next().value) // 2
