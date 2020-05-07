

// 全部选择器
var es = function(selector) {
  return document.querySelectorAll(selector)
}
//https://movie.douban.com/top250
var qs = es('.inq')
for(var i = 0; i < qs.length; i++) {
  let a = qs[i]
  console.log(a.innerText);
}
