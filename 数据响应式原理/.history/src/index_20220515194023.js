let obj = {}
let num = 123
Object.defineProperty(obj, 'a', {
  get() {
    console.log('你试图访问a属性')
    return num
  },
  set(val) {
    console.log('你试图改变a属性')
    num = 456
  }
})


console.log(obj.a);

obj.a = 456

console.log(obj.a);
