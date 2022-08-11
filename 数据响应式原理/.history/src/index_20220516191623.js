import defineReactive from './defineReactive'
import Observer from './Observer'
let obj = {
  a: {
    m: {
      n: 5
    }
  },
  b: 4
}

//创建一个observe函数，注意没有r
function observe(value) {
  //如果传入的value不是一个对象，那么什么也不做
  if(typeof value != 'object') return 
  
  //定义ob,用于储存observer类的实例
  var ob
  if(typeof value.__ob__ != 'undefined') {
    ob = value.__ob__
  } else {
    ob = new Observer(value)
  }

  return ob
}
