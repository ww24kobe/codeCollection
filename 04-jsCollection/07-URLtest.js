var paramsString = 'a=1&b=2&name=哈哈'
var searchParams = new URLSearchParams(paramsString)

for (let p of searchParams.entries()) {
  console.log(p)
}

let url = 'https://abc.com/index.php?c=3&d=4'
const urlObj = new URL(url)
urlObj.searchParams.set('e', 5)
for (var [key, value] of urlObj.searchParams.entries()) {
  console.log(`${key}=>${value}`)
}
