export default function parse(templateStr) {
  var index = 0

  var rest = ''
  while(index < templateStr.length - 1) {
    rest = templateStr.substring(index)
    if(/^\<[a-z]+[1-9]\>/.test(rest)) {
      let tag = rest.match(/^\<([a-z]+[1-9])\>/)[1]

      console.log(tag);

      index += tag.length + 2
    } else {
      index++
    }
  }
}