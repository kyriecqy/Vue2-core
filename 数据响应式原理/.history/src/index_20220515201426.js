let obj = {}

function defineReactive(data, key, val) {
  Object.defineProperty(data, key, {
    get() {
      console.log('你试图访问a属性')
      return val
    },
    set(newvalue) {
      console.log('你试图改变a属性',newvalue)
      val = newvalue
    }
  })
}

defineReactive(obj, 'a', 10)

console.log(obj.a);

obj.a = 100

console.log(obj.a);