import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const container = document.getElementById('container')

const vnode = h('div', {}, [
  h('h2', {}, 'kyrie'),
  h('h3', {}, 'kd'),
  h('h4', {}, 'harden'),
])

patch(container, vnode)