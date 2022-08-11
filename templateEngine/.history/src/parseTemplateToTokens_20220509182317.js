import Scanner from './Scanner'

/*
    将模板字符串变为tokens数组
*/
export default function parseTemplateToTokens(templateStr) {
  
  var tokens = []

  //创建一个扫描器类
  var scanner = new Scanner(templateStr)
  var words = ''
  while(!scanner.eos()) {
    // 收集开始标记出现之前的文字
    words = scanner.scanUntil('{{')
    //console.log(words, scanner.pos);
    //存入tokens数组
    tokens.push(['text', words])
    //跳过指定内容
    scanner.scan('{{')

    // 收集结束标记出现之前的文字
    words = scanner.scanUntil('}}')
    //console.log(words, scanner.pos);
    //存入tokens数组
    tokens.push(['name', words])
    //跳过指定内容
    scanner.scan('}}')
    
  }

  return tokens
}