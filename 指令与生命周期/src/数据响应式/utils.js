/*
    工具函数
*/
export const def = function(obj, key, value, enumerable) {
  Object.defineProperty(obj, key, {
    value,
    //设置__ob__属性不可遍历
    enumerable,
    writable: true,
    configurable: true
  })
}