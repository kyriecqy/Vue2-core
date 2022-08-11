import vnode from './vnode'

//编写一个低配版本的h函数，必须接收3个参数
//相当于重载功能较弱,只支持以下形式
//情况一：h('div', {}, '一些文字')
//情况二：h('div', {}, [])
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
  } else if(typeof c == 'object' && c.hasOwnProperty('sel')) {
    //如果c的类型是一个对象，且它有sel这个属性(因为h函数必须有sel属性)
    //说明h函数的参数类型是情况三
  } else {
    throw new Error('第三个参数传入的不对')
  }
}