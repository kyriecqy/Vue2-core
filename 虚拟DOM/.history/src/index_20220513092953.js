import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const container = document.getElementById('container')

const vnode = h('ul', {}, [
  h('li', {}, 'kyrie'),
  h('li', {}, 'kd'),
  h('li', {}, 'harden'),
])

patch(container, vnode)