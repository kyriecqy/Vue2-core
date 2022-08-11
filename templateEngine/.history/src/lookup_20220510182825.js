/*
    函数的功能是在dataObj对象中，找出用连续点符号的keyName的属性
    比如：dataObj是
      {
        a: {
          b: {
            c: 100
          }
        }
      }
    那么lookup(dataObj, 'a.b.c')的结果就是100
*/
export default function lookup(dataObj, keyName) {
  console.log(dataObj, keyName);
}