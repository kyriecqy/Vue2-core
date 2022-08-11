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
      //这里会出现一个问题
      resultStr += data[token[1]]
    } else if(token[0] == '#') { // '#'标记的tokens，要递归处理它的下标为2的数组
    }
  }

  console.log(resultStr);
  return resultStr
}