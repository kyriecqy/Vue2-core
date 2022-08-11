export default function parseAttrsStr(attrsStr) {
  if(attrsStr == undefined) return []

  //要遍历attrsStr，而不是直接用split按照空格分割，因为css中允许 class="aa bb cc"这样的存在
  
  //用来判断是否处于引号内
  let isIn = false
  //断点
  let point = 0

  let result = []

  for(let i = 0; i < attrsStr.length; i++) {
    const char = attrsStr[i]
    if (char == '"' || char == "'") {
      isIn = !isIn
    } else if(char == ' ' && !isIn) {
      result.push(attrsStr.substring(i))
      point = i
    }
  }

  return result
}