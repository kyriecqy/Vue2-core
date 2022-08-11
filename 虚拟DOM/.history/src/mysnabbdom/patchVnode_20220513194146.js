export default function patchVnode(oldVnode, newVnode) {
  //判断新节点有没有text属性
  if(newVnode.text != undefined && (newVnode.children  == undefined || newVnode.children.length == 0)) {
    //新节点有text属性
    if(oldVnode.text != newVnode.text) {
      //不销毁老节点，而是将新节点的text写到老节点身上
      //不用担心老节点上的是text还是children，新插入的text都会覆盖掉
      oldVnode.elm.innerText = newVnode.text
    }
  } else {//新节点没有text属性，有children
    //判断老节点是有text还是children
    if(oldVnode.children != undefined && oldVnode.children.length > 0) {
      //老节点有的是children，是最复杂的情况
    } else { //老节点有的是text
      //清空老节点的text内容
      oldVnode.elm.innerHTML = ''
      for(let i=0; i<newVnode.children.length; i++) {
        //将新节点的children依次传入创建真实dom，并追加在老节点里面
        let dom = CreateElement(newVnode.children[i])
        oldVnode.elm.appendChild(dom)
      }
    }
  }
}