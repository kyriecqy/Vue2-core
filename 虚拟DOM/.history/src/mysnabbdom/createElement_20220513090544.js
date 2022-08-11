/*
    函数的作用是创建真正的dom节点
*/

export default function createElement(vnode) {
  console.log(vnode);
  //根据vnode的标签来创建真实dom，现在还是个孤儿节点，没有上树
  let domNode = document.createElement(vnode.sel)
  console.log(domNode);
  //判断vnode是有文本还是子节点
  if(vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)) {
    //vnode有的是文本
    domNode.innerText = vnode.text
    //给vnode添加elm属性
    vnode.elm = domNode
  } else if(Array.isArray(vnode.children) && vnode.children.length > 0) {

  }
  //返回elm属性，是一个纯dom对象
  return vnode.elm
}