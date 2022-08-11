export default function parse(templateStr) {
  var index = 0
  var rest = ''
  //开始标记
  var startRegExp = /^\<([a-z]+[1-9]?)\>/
  //结束标记
  var endRegExp = /^\<\/([a-z]+[1-9]?)\>/
  //文字标记
  var wordRegExp = /^([^\<]+)\<\/([a-z]+[1-9]?)\>/

  //定义两个栈
  var stack1 = []
  var stack2 = []

  while(index < templateStr.length - 1) {
    rest = templateStr.substring(index)
    if(startRegExp.test(rest)) {
      let tag = rest.match(startRegExp)[1]
      //把开始标记推入栈1
      stack1.push(tag)
      //将空数组推入栈2
      stack2.push({'tag': tag, children: []})
      console.log('开始标记:',tag);

      index += tag.length + 2

      console.log('栈1:',stack1);
      console.log('栈2:',stack2);
    } else if(endRegExp.test(rest)){
      let tag = rest.match(endRegExp)[1]
      console.log('结束标记:',tag);
      //检测到匹配的结束标签，将栈1中处于栈顶（最后进栈的标签）的标签出栈
      if(tag == stack1[stack1.length - 1]) {

        
        let pop_tag = stack1.pop()
        let pop_arr = stack2.pop()

        if(stack2.length != 0) {
            stack2[stack2.length - 1].children.push(pop_arr)
        }
        console.log('栈1:',stack1);
        console.log('栈2:',stack2);

      }else {
        throw new Error('标签没有闭合')
      }

      index += tag.length + 3
    } else if(wordRegExp.test(rest)) { //识别到文字

      let word = rest.match(wordRegExp)[1]
      //文字不能全为空，因为html字符串中会有许多的换行空格也会被识别成文字
      if(!/^\s+$/.test(word)) {
        console.log('检测到文字',word);
        stack2[stack2.length -1].push({'text': word, type: 3})
        console.log('栈1:',stack1);
        console.log('栈2:',stack2);
      }
      
      index += word.length
    } else {
      index++
    }
  }
}