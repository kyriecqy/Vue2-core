import vnode from './vnode'
/*
    函数的功能是将传入的数据变成虚拟dom
*/
//编写一个低配版本的h函数，必须接收3个参数
//相当于重载功能较弱,只支持以下形式
//情况一：h('div', {}, '一些文字')
//情况二：h('div', {}, [ 在里面嵌套h函数 ])
//情况三：h('div', {}, h())
export default function h(sel, data, c) {
  //检查参数个数
  if(arguments.length != 3) {
    throw new Error('这个h函数必须传入三个函数')
  }

  //检查参数c的类型
  if(typeof c == 'string' || typeof c == 'number') { 
    //说明h函数的参数类型是情况一
    //将参数依次传给vnode函数，
    //vnode的第三个参数是children，情况一显然没有children，所以传入undefined
    //vnode的第五个参数是elm，只有在上树(即生成了真实dom时)才给她加上数据，所以传入undefined
    return vnode(sel, data, undefined, c, undefined)

  } else if(Array.isArray(c)) {
    //说明h函数的参数类型是情况二
    var children = []
    //遍历c，c的每一项也必须是h函数
    for(let i=0; i<c.length; i++) {
      if(!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel'))) {
        throw new Error('传入的数组中有项不是h函数')
      }
      //c[i]是h函数，则将他收集起来
      children.push(c[i])
    }
    //收集完毕了，可以返回虚拟节点，这个虚拟节点是有children的
    return vnode(sel, data, children, undefined, undefined)
  } else if(typeof c == 'object' && c.hasOwnProperty('sel')) {
    //如果c的类型是一个对象，且它有sel这个属性(因为h函数必须有sel属性)
    //说明h函数的参数类型是情况三
    var children = []
    children.push(c)
    return vnode(sel, data, children, undefined, undefined)
  } else {
    throw new Error('第三个参数传入的不对')
  }
}