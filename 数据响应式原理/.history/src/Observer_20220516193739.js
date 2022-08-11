import {def} from './utils'
import defineReactive  from './defineReactive';

export default class Observer {
  constructor(value) {
    //给实例加上__ob__属性
    //一定要注意，构造函数中的this不是表示类本身，而是表示实例
    //添加__ob__属性，值是这次new的实例
    def(value, '__ob__', this, false)
    console.log(value);
    this.walk(value)
  }
  //遍历
  walk(value) {
    for(let k in value) {
    }
  }
}