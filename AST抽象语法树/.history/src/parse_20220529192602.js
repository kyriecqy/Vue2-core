export default function parse(templateStr) {
  var index = 0

  while(index < templateStr.length - 1) {
    if(/^\<[a-z]+\>/.test(templateStr)) {
      let tag = templateStr.match(/^\<([a-z]+)\>/)[1]

      console.log(tag);

      index += tag.length + 2
    } else {
      index++
    }
  }
}