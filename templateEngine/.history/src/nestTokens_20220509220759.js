/*
    nestTokens函数的作用是折叠tokens，将'#' 和 '/'之间的内容整合在一起，作为数组的第三项
*/


export default function nestTokens(tokens) {
  //折叠好的tokens
  var nestedTokens = []

  //console.log(tokens);
  //栈
  //将要嵌套的内容存入栈
  var sections = []
  //收集器，天生指向nestedTokens，引用类型值，所以collector和nestedToken指向同一值
  var collector = nestedTokens

  for(let i=0 ; i < tokens.length; i++) {
    let token = tokens[i]
    
    switch(token[0]) {
      case '#':
        //在收集器中放入这个token
        collector.push(token)
        //入栈
        sections.push(token)
        //改变收集器指向，给token添加下标为2的项，让收集器指向它
        token[2] = []
        collector = token[2]
        break;
      case '/':
        //出栈
        let section = sections.pop()
        //判断栈是否为空，若为空 收集器指向nestedTokens ，若不为空 收集器指向栈顶那项下标为2的项
        collector = sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens
        break;
      default :
        collector.push(token)
    }
    
  }
  return nestedTokens
}

/*  switch(token[0]) {
      case '#':
        //为token的下标为2的位置创建一个数组，用于收集子元素
        token[2] = []
        //入栈
        sections.push(token)
        //console.log(token[1] + '入栈了')
        break;
      case '/':
        //出栈
        let section = sections.pop()
        //console.log(section + '出栈了')

        //当遇到 '/' 时，整个嵌套内容section出栈，要将他存入最终的tokens中
        //nestedTokens.push(section)
        if(sections.length == 0) {
          nestedTokens.push(section)
        } else {
          sections[sections.length - 1][2].push(section)
        }
        break;
      default :
        // 如果栈内没有内容了，说明暂时没有嵌套的内容，将这个token直接存入最终结果中
        if(sections.length == 0) {
          nestedTokens.push(token)
        } else {
          //sections[sections.length - 1]表示栈顶的token，就是最新进去的包含 '#' 的token
          // [2].push(token)在case中已经为这个token创建了下标为2的数组，将token存入最新进去的包含 '#' 的token的下标为2的位置
          sections[sections.length - 1][2].push(token)
        }
    }
    
    
    */