import {observe} from './observe'
import Watcher from './Watcher';
let obj = {
  a: {
    m: {
      n: 100
    }
  },
  b: [1,2,3]
}

observe(obj)

new Watcher(obj, 'a.m.n', (val) => {
  console.log("@@@@", val);
})

obj.a.m.n = 200

console.log(obj.a.m.n);