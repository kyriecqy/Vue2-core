import {def} from './utils'
import defineReactive  from './defineReactive';
import { arrayMethods } from './array'
import { observe } from './observe';

export default class Observer {
  constructor(value) {
    //给实例加上__ob__属性
    //一定要注意，构造函数中的this不是表示类本身，而是表示实例
    //添加__ob__属性，值是这次new的实例
    def(value, '__ob__', this, false)
    
    if(Array.isArray(value)) {
      //如果是数组，将数组的原型强行指向arrayMethods
      Object.setPrototypeOf(value, arrayMethods)
      //让数组的每一项也observe一下
      this.observeArr(value)
    } else {
      this.walk(value)
    }
  }
  //遍历
  walk(value) {
    for(let k in value) {
      defineReactive(value, k)
    }
  }

  //数组遍历
  observeArr(arr) {
    for(let i = 0, l = arr.length; i < l; i++) {
      observe(arr[i])
    }
  }
}