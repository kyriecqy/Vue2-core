import vnode from "./vnode";

export default function patch(oldVnode, newVnode) {
  //判断老节点是真实dom还是虚拟dom
  if(oldVnode.sel == '' || oldVnode.sel == undefined) {
    //说明是个真实dom，此时要将他包装成虚拟dom
    //他的sel就是它的标签，data，children，text都定义为空，elm就是它本身
    oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
  }

  console.log(oldVnode);
}