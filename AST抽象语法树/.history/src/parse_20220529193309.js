export default function parse(templateStr) {
  var index = 0
  var rest = ''
  var startRegExp = /^\<([a-z]+[1-9]?)\>/
  while(index < templateStr.length - 1) {
    rest = templateStr.substring(index)
    if(startRegExp.test(rest)) {
      let tag = rest.match(startRegExp)[1]

      console.log(tag);

      index += tag.length + 2
    } else {
      index++
    }
  }
}