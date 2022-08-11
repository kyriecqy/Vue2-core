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
    console.log('哈哈哈');
  }, false)
})
