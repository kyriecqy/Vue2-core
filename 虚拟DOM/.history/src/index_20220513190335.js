import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const container = document.getElementById('container')

const vnode = h('section', {}, '凯里欧文')

patch(container, vnode)

const vnode2 = h('section', {}, [
  h('p', {}, 'kyrie'),
  h('p', {}, 'kd'),
  h('p', {}, 'harden')
])

const btn = document.getElementById('btn')

btn.onclick = function() {
  patch(vnode, vnode2)
}