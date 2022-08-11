let obj = {}

Object.defineProperty(obj, 'a', {
  get() {
    console.log('你试图访问a属性')
    return 123
  },
  set(val) {
    console.log('你试图改变a属性')
    return val
  }
})


console.log(obj.a);

obj.a = 456

console.log(obj.a);
