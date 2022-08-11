import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const container = document.getElementById('container')

const vnode = h('section', {}, [
  h('h4', {}, 'kyrie'),
  h('h4', {}, 'kd'),
  h('h4', {}, 'harden'),
])

patch(container, vnode)

const vnode2 = h('section', {}, '我是新节点')

const btn = document.getElementById('btn')

btn.onclick = function() {
  patch(vnode, vnode2)
}