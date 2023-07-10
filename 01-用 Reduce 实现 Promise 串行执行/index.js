// function runPromiseByQueue(myPromises) {
//   myPromises.reduce(
//     (previousPromise, nextPromise) => previousPromise.then(() => nextPromise()),
//     Promise.resolve()
//   )
// }

async function runPromiseByQueue(myPromises) {
  for (let value of myPromises) {
    await value()
  }
}

const createPromise = (time, id) => () =>
  new Promise((solve) =>
    setTimeout(() => {
      console.log('promise', id)
      solve()
    }, time)
  )

runPromiseByQueue([
  createPromise(3000, 1),
  createPromise(2000, 1),
  createPromise(1000, 1),
])
