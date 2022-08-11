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

    const ob = this.__ob__
    let inserted = []

    switch(method) {
      case 'push':
      case 'unshift':
        inserted = arguments;
        break;
      //splice可以传入三个参数，第三个参数才是要替换或者插入的项
      case 'splice':
        console.log(arguments);
        inserted = arguments.slice(2);
        break;
    }
    //如果是有要插入的项，将要插入的项也observe一下，因为可能插入的项是或者有对象
    if(inserted) {
      ob.observeArr(inserted)
    }
    //恢复原来的功能
    //因为是某个数组调用方法，此处的this指向调用它的数组的上下文，
    //此处的函数不能用箭头函数：1.箭头函数没有arguments 2.箭头函数的上下文不明确
    //要记得返回原来方法的值，因为像pop等方法会返回删除的值
    const result = original.apply(this, arguments)

    return result
  }, false)
})
