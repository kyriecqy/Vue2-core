import lookup from "./lookup";
import renderTemplate from "./renderTemplate";
/*
    处理数组，结合renderTemplate函数实现递归
    注意这个函数接收的是一个token，不是tokens

    这个函数要递归调用renderTemplate函数，调用的次数由data数据中这部分要使用的数组的长度
    例如data的形式如下，
    假设我们此次传入的token要用到的是arr中的数据，那么parseArray()就要调用renderTemplate函数2次
    data = {
      arr: [
        {name: 'cqy'},
        {name: 'kyrie'}
      ]
    }
*/
export default function parseArray(token, data) {
  console.log(token, data);

  var resultStr = ''

  //得到整体数据中，这个token要用到的数据
  var v = lookup(data, token[1])
  //console.log(v);

  //这里是一个重点，它遍历的是数据，根据数据的长度来觉得要循环几次，而不是遍历token
  //因为 {{#...}} {{/...}}之间的代码本来的需求就是根据数据的条数来循环创建的
  for(let i=0; i<v.length; i++) {
    resultStr += renderTemplate(token[2], {
      '.': '我是点'
    })
  }
  console.log(resultStr);
  return resultStr
}