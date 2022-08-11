import {def} from './utils'
const arrayPrototype = Array.prototype

//以Array.prototype为原型创建arrayMethods对象
export const arrayMethods = Object.create(arrayPrototype)

const methodsChange = [
  'push',
  'pop',
  'shift',
  'unshift',
  'sort',
  'splice',
  'reverse'
]

methodsChange.forEach(method => {
  //备份原来的方法
  const original = arrayPrototype[method]
  //定义新的方法
  def(arrayMethods, method, function(){
    //恢复原来的功能
    //因为是某个数组调用方法，此处的this指向调用它的数组的上下文，
    //此处的函数不能用箭头函数：1.箭头函数没有arguments 2.箭头函数的上下文不明确
    original.apply(this, arguments)
    console.log('哈哈哈');
  }, false)
})
