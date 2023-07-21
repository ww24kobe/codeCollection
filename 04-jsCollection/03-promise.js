const promise1 = Promise.resolve(3) // fulfilled
const promise2 = Promise.resolve(4) // fulfilled
const promise3 = Promise.reject(5) // rejected
const promise4 = new Promise((resolve, reject) => {}) // pending

// 获取所有成功的结果
Promise.all([promise1, promise2]).then((data) => {
  console.log(data)
})

// 获取所有成功的最快的结果
Promise.race([promise1, promise2]).then((data) => {
  console.log(data)
})

// 获取promise的状态。状态改变触发 即fulfilled 或 rejected
Promise.allSettled([promise1, promise2, promise3]).then((data) => {
  data.forEach((item) => console.log(item.status))
})

// 任意一个成功则触发
Promise.any([promise1, promise2]).then((data) => {
  console.log(data)
})
