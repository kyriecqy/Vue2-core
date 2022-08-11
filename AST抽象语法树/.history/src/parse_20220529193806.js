export default function parse(templateStr) {
  var index = 0
  var rest = ''
  //开始标记
  var startRegExp = /^\<([a-z]+[1-9]?)\>/
  //结束标记
  var endRegExp = /^\<\/([a-z]+[1-9]?)\>/
  while(index < templateStr.length - 1) {
    rest = templateStr.substring(index)
    if(startRegExp.test(rest)) {
      let tag = rest.match(startRegExp)[1]

      console.log('开始标记:',tag);

      index += tag.length + 2
    } else if(endRegExp.test(rest)){
      let tag = rest.match(endRegExp)[1]
      console.log('结束标记:',tag);

      index += tag.length + 3
    } else {
      index++
    }
  }
}