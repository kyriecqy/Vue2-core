let obj = {
  a: {
    m: {
      n: 5
    }
  }
}

function defineReactive(data, key, val) {
  if(arguments.length == 2) {
    val = data[key]
  }
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
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
defineReactive(obj, 'a')

console.log(obj.a.m.n);