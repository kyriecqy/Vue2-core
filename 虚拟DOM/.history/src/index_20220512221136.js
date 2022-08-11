import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const container = document.getElementById('container')

const vnode = h('h1', {}, '凯里欧文')

patch(container, vnode)