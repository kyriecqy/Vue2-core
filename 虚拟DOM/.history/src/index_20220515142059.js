import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const container = document.getElementById('container')

const vnode = h('section', {}, [
  h('p', {key: 'a'}, 'kyrie'),
  h('p', {key: 'b'}, 'kd'),
  h('p', {key: 'c'}, 'harden')
])

patch(container, vnode)

const vnode2 = h('section', {}, [
  h('p', {key: 'a'}, 'kyrie'),
  h('p', {key: 'd'}, 'cqy'),
  h('p', {key: 'b'}, 'kd'),
  h('p', {key: 'c'}, 'harden'),
  h('p', {key: 'e'}, 'crf'),
])

const btn = document.getElementById('btn')

btn.onclick = function() {
  patch(vnode, vnode2)
}