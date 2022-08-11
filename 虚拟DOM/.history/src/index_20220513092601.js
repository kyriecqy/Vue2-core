import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const container = document.getElementById('container')

const vnode = h('div', {}, [
  h('h2', {key: 'a'}, 'kyrie'),
  h('h3', {key: 'b'}, 'kd'),
  h('h4', {key: 'c'}, 'harden'),
])

patch(container, vnode)