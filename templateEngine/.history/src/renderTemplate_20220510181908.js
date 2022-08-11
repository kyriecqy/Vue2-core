/*
    函数的作用是将tokens变成dom字符串
*/

export default function renderTemplate(tokens, data) {
  console.log(tokens, data);

  //结果字符串
  var resultStr = ''

  for(let i=0; i<tokens.length; i++) {
    let token = tokens[i]
    if(token[0] == 'text') {
      resultStr += token[1]
    } else if(token[0] == 'name') {
      //这里会出现一个问题，js无法识别字符串形式的点语法
      //let templateStr = '我是{{somebody}}门徒,我得了{{a.b.c}}分'
      //let data = {
      //  somebody: '欧文',
      //  a: {
      //    b: {
      //      c: 100
      //    }
      //  }  
      //}
      //这时候的data[token[1]]就是data['a.b.c']
      resultStr += data[token[1]]
    } else if(token[0] == '#') { // '#'标记的tokens，要递归处理它的下标为2的数组
    }
  }

  console.log(resultStr);
  return resultStr
}