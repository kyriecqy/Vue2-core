import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const container = document.getElementById('container')

const vnode = h('ul', {}, [
  h('li', {}, 'kyrie'),
  h('li', {}, 'kd'),
  h('li', {}, 'harden'),
])

patch(container, vnode)

const vnode2 = h('div', {}, [
  h('p', {}, '欧文'),
  h('p', {}, '杜兰特'),
  h('p', {}, '哈登'),
])

patch(vnode, vnode2)