import {observe} from './observe'
let obj = {
  a: {
    m: {
      n: 100
    }
  },
  b: [1,2,3]
}

observe(obj)
obj.b.push(4)

console.log(obj);