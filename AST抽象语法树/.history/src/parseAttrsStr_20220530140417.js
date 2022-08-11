export default function parseAttrsStr(attrsStr) {
  const attrsArr = attrsStr != undefined ? attrsStr.trim().split(" ") : undefined

  let attrs = []
  if(attrsArr) {
    for(let i = 0; i < attrsArr.length; i++) {
      let attrName = attrsArr[i].split('=')[0]
      let attrValue = attrsArr[i].split('=')[1]
      attrs.push({
        'name': attrName,
        'value': attrValue
      })
    }
  
    return attrs
  }else {
    return 
  }
}