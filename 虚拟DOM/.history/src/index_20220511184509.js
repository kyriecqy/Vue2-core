
import {init} from 'snabbdom/init'
import {classModule} from 'snabbdom/modules/class'
import {propsModule} from 'snabbdom/modules/props'
import {styleModule} from 'snabbdom/modules/style'
import {eventListenersModule} from 'snabbdom/modules/eventlisteners'
import {h} from 'snabbdom/h'

var vnode = h('a', {props: {href: 'https://www.kyriecqy.github.io'}}, 'cqy')

console.log(vnode);