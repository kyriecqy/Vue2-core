import vnode from "./vnode";
import CreateElement from "./createElement";

export default function patch(oldVnode, newVnode) {
  //判断老节点是真实dom还是虚拟dom
  if(oldVnode.sel == '' || oldVnode.sel == undefined) {
    //说明是个真实dom，此时要将他包装成虚拟dom
    //他的sel就是它的标签，data，children，text都定义为空，elm就是它本身
    oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
  }
  //console.log(oldVnode);

  //判断oldVnode和newVnode是不是同一个节点
  if(oldVnode.sel == newVnode.sel && oldVnode.key == newVnode.key) {
    //是同一个节点

    //判断新节点有没有text属性
    if(newVnode.text != undefined && (newVnode.children  == undefined || newVnode.children.length == 0)) {
      //新节点有text属性
      if(oldVnode.text != newVnode.text) {
        //不销毁老节点，而是将新节点的text写到老节点身上
        //不用担心老节点上的是text还是children，新插入的text都会覆盖掉
        oldVnode.elm.innerText = newVnode.text
      }
    } else {

    }
  } else {
    //不是同一个节点，插入新的虚拟dom，暴力销毁旧的dom(先插后删，借用旧dom作为一个插入位置的标识)
    let newVnodeElm = CreateElement(newVnode)
    //console.log(newVnode);
    //将新节点插入到老节点之前
    //console.log(oldVnode.elm);
    if(oldVnode.elm.parentNode && newVnodeElm) {
      oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
    }
    //删除老节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm)
  }
}