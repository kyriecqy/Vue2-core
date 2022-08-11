import lookup from "./lookup";
/*
    处理数组，结合renderTemplate函数实现递归
    注意这个函数接收的是一个token，不是tokens

    这个函数要递归调用renderTemplate函数，调用的次数由data数据中这部分要使用的数组的长度
    例如data的形式如下，
    假设我们此次传入的token要用到的是arr中的数据，那么parseArray()就要调用renderTemplate函数2次
    data = {
      arr: [
        {name: 'cqy', hobbies: ['篮球','敲代码']},
        {name: 'kyrie', hobbies: ['篮球','高尔夫']}
      ]
    }
*/
export default function parseArray(token, data) {
  console.log(token, data);
  var v = lookup(data, token[1])
  console.log(v);
}