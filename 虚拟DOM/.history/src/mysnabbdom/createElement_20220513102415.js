/*
    函数的作用是创建真正的dom节点
*/

export default function CreateElement(vnode) {
  console.log(vnode);
  //根据vnode的标签来创建真实dom，现在还是个孤儿节点，没有上树
  let domNode = document.createElement(vnode.sel)
  console.log(domNode);
  //判断vnode是有文本还是子节点
  if(vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)) {
    //vnode有的是文本
    domNode.innerText = vnode.text

  } else if(Array.isArray(vnode.children) && vnode.children.length > 0) {
    //vnode拥有子节点，就要递归创建节点
    for(let i = 0; i < vnode.children.length; i++) {
      let ch = vnode.children[i]
      console.log(ch);
      //将子节点变成真实dom，并追加到父节点上
      let chDom = CreateElement(ch)
      domNode.appendChild(chDom)
    }
  }
  vnode.elm = domNode
  // 返回真实dom
  return vnode.elm
}