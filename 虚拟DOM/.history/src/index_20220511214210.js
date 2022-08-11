import h from './mysnabbdom/h'

var myVnode = h('div', {}, [
  h('p', {}, '欧文'),
  h('p', {}, '杜兰特'),
  h('p', {}, h('div', {}, '哈登')),
])

console.log(myVnode);