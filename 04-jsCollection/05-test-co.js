// 作用：异步编程的一种解决方案，将异步结果同步返回。提前返回
const co = require('./co.js')
function delayMsg(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg)
    }, time)
  })
}

function* main() {
  var data = yield delayMsg('1', 500)
  console.log('data:', data)
  var data2 = yield delayMsg('2', 500)
  console.log('data:', data2)
}

const gen = main()
co(gen, 1, 2)
