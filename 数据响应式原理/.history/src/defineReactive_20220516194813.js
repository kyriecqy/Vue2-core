import { observe } from "./observe"

export default function defineReactive(data, key, val) {
  //判断，当传入的参数是两个时，val就等于对象data的本身值
  if(arguments.length == 2) {
    val = data[key]
  }
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('你试图访问' + key +'属性')
      return val
    },
    set(newvalue) {
      console.log('你试图改变' + key + '属性',newvalue)
      val = newvalue
    }
  })
}