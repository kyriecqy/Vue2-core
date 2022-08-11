/*
    函数的作用是创建真正的dom节点，将他查到标杆节点的前面
*/

export default function createElement(vnode, pivot) {
  //console.log(vnode, pivot);
  //根据vnode的标签来创建真实dom，现在还是个孤儿节点，没有上树
  let domNode = document.createElement(vnode.sel)
  //判断vnode是有文本还是子节点
  if(vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)) {
    //vnode有的是文本
    domNode.innerText = domNode.text
    //让孤儿节点上树
    //让标杆节点的父元素调用insertBefore来将新节点插入到标杆节点之前
    pivot.parentNode.insertBefore(domNode, pivot)
  }
}