//函数的功能：将收到的参数整合成一个对象返回
export default function vnode(sel, data, children, text, elm) {
  return {
    sel, data, children, text, elm
  }
}