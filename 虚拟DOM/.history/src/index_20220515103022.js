import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const container = document.getElementById('container')

const vnode = h('section', {}, [
  h('p', {key: 'a'}, 'kyrie'),
  h('p', {key: 'b'}, 'kd'),
  h('p', {key: 'c'}, 'harden'),
  h('p', {key: 'd'}, 'cqy')
])

patch(container, vnode)

const vnode2 = h('section', {}, [
  h('p', {key: 'b'}, 'kddddd')
])

const btn = document.getElementById('btn')

btn.onclick = function() {
  patch(vnode, vnode2)
}