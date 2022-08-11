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
    
    if(words != '') {
      //存入tokens数组
      tokens.push(['text', words])
    }
    //跳过指定内容
    scanner.scan('{{')

    // 收集结束标记出现之前的文字
    words = scanner.scanUntil('}}')
    
    if(words != '') {
      //此处的words是{{}}中的内容，判断words的首字母
      if(words[0] == '#') {
        //将 # 和 words中#之后的内容 分开存储
        tokens.push(['#', words.substring(1)])
      } else if(words[0] == '/') {
        tokens.push(['/', words.substring(1)])
      } else {
        tokens.push(['name', words])
      }
    }
    //跳过指定内容
    scanner.scan('}}')
    
  }

  return tokens
}