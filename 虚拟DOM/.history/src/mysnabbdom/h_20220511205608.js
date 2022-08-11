import vnode from './vnode'

//编写一个低配版本的h函数，必须接收3个参数
//相当于重载功能较弱,只支持以下形式
//h('div', {}, '一些文字')
//h('div', {}, [])
//h('div', {}, h())
export default function h(sel, data, c) {
  //检查参数个数
  if(arguments.length != 3) {
    throw new Error('这个h函数必须传入三个函数')
  }
}