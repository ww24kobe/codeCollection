const start = new Date('2023-01-01')
const end = new Date('2023-02-10')
// 将时间戳转换为毫秒数
const millisecondsPerDay = 24 * 60 * 60 * 1000

// 计算两个日期之间的天数差异并取绝对值
const timeDifference = Math.abs(end - start)

// 计算天数
const days = Math.round(timeDifference / millisecondsPerDay)

console.log(days)
