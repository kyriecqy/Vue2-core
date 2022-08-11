/*
    nestTokens函数的作用是折叠tokens，将'#' 和 '/'之间的内容整合在一起，作为数组的第三项
*/


export default function nestTokens(tokens) {
  //折叠好的tokens
  var nestedTokens = []

  console.log(tokens);
  //栈
  var sections = []

  for(let i=0 ; i < tokens.length; i++) {
    let token = tokens[i]

    switch(token[0]) {
      case '#':
        token[2] = []
        sections.push(token)
        //console.log(token[1] + '入栈了')
        break;
      case '/':
        let section = sections.pop()
        //console.log(section + '出栈了')
        break;
      default :
        if(sections.length == 0) {
          nestedTokens.push(token)
        } else {
          sections[sections.length - 1][2].push(token)
        }
    }
  }
  return nestedTokens
}