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

//obj.b.push({
//  name: 'cqy'
//})

obj.b.splice(2, 0, 1234)

console.log(obj.b);