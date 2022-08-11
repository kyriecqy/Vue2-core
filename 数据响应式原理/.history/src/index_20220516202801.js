import {observe} from './observe'


let obj = {
  a: {
    m: {
      n: 5
    }
  },
  b: 4
}



observe(obj)

obj.b++

console.log(obj.a.m.n);