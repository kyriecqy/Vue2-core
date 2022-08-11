import {observe} from './observe'


let obj = {
  a: {
    m: {
      n: 100
    }
  },
  b: 4
}



observe(obj)

obj.b++

console.log(obj.a.m.n);