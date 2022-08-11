
import {init} from 'snabbdom/init'
import {classModule} from 'snabbdom/modules/class'
import {propsModule} from 'snabbdom/modules/props'
import {styleModule} from 'snabbdom/modules/style'
import {eventListenersModule} from 'snabbdom/modules/eventlisteners'
import {h} from 'snabbdom/h'

//创建patch函数
const patch = init([classModule,propsModule,styleModule,eventListenersModule])

//创建虚拟节点
var vnode = h('ul', [
  h('li', '欧文'),
  h('li', '杜兰特'),
  h('li', '哈登')
])

console.log(vnode);

//让虚拟dom上树
const container = document.getElementById('container')
patch(container,vnode)