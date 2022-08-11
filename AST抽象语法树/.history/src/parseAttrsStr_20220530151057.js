export default function parseAttrsStr(attrsStr) {
  if(attrsStr == undefined) return []
  console.log(attrsStr);
  //要遍历attrsStr，而不是直接用split按照空格分割，因为css中允许 class="aa bb cc"这样的存在
  
  //用来判断是否处于引号内
  let isIn = false
  //断点
  let point = 0
  //将attrsStr按空格分割之后的数组
  let resultArr = []

  //对resultArr进行处理转化成的结果数组
  let attrs = []

  for(let i = 0; i < attrsStr.length; i++) {
    const char = attrsStr[i]
    if (char == '"') {
      isIn = !isIn
    } else if(char == ' ' && !isIn) {
      if(!/^\s*$/.test(attrsStr.substring(point, i))) {
        resultArr.push(attrsStr.substring(point, i).trim())
        point = i
      }
    }
  }
  resultArr.push(attrsStr.substring(point).trim())

  for(let i = 0; i < resultArr.length; i++) {
    let attrName = resultArr[i].split('=')[0]
    let attrValue = resultArr[i].split('=')[1]
    
    attrValue = attrValue.replace(/^"(.+)"$/, '$1')
    

    attrs.push({
      'name': attrName,
      'value': attrValue
    })
  }


  return attrs
}