export default function parse(templateStr) {
  var index = 0
  var rest = ''
  //开始标记
  var startRegExp = /^\<([a-z]+[1-9]?)\>/
  //结束标记
  var endRegExp = /^\<\/([a-z]+[1-9]?)\>/

  //定义两个栈
  var stack1 = []
  var stack2 = []

  while(index < templateStr.length - 1) {
    rest = templateStr.substring(index)
    if(startRegExp.test(rest)) {
      let tag = rest.match(startRegExp)[1]
      stack1.push(tag)
      console.log('开始标记:',tag);

      index += tag.length + 2

      console.log(stack1);
    } else if(endRegExp.test(rest)){
      let tag = rest.match(endRegExp)[1]
      console.log('结束标记:',tag);

      if(tag == stack1[stack1.length - 1]) {
        stack1.pop()
        console.log(stack1);

      }else {
        throw new Error('标签没有闭合')
      }

      index += tag.length + 3
    } else {
      index++
    }
  }
}