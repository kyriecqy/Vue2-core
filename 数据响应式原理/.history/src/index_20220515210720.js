import defineReactive from './defineReactive'
let obj = {
  a: {
    m: {
      n: 5
    }
  }
}


defineReactive(obj, 'a')

console.log(obj.a.m.n);