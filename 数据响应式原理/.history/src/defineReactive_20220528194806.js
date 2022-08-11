import Dep from "./Dep"
import { observe } from "./observe"

export default function defineReactive(data, key, val) {
  const dep = new Dep()
  //判断，当传入的参数是两个时，val就等于对象data的本身值
  if(arguments.length == 2) {
    val = data[key]
  }
  //子元素要进行observe，至此形成了递归，这个递归是observe, Observer, defineReactive三者之间的递归
  let childOb = observe(val)

  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('你试图访问' + key +'属性')
      //如果处于依赖收集阶段
      if(Dep.target) {
        dep.depend()
      }
      return val
    },
    set(newvalue) {
      console.log('你试图改变' + key + '属性',newvalue)
      val = newvalue
      //接着观察传入的新值，因为新值可能是一个对象，里面会有新的属性
      childOb = observe(newvalue)
      //发布订阅模式，通知dep
      dep.notify()
    }
  })
}