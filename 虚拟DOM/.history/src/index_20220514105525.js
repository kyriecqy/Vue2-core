import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const container = document.getElementById('container')

const vnode = h('section', {}, [
  h('p', {}, 'kyrie'),
  h('p', {}, 'kd'),
  h('p', {}, 'harden')
])

patch(container, vnode)

const vnode2 = h('section', {},'凯里欧文' )

const btn = document.getElementById('btn')

btn.onclick = function() {
  patch(vnode, vnode2)
}