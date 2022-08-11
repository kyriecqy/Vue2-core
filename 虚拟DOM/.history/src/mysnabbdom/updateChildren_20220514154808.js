import patchVnode from "./patchVnode";

//判断节点是否相同
function checkSameVnode(a, b) {
  return (a.sel == b.sel && a.key == b.key)
}

export default function updateChildren(parentElm, oldCh, newCh) {
  console.log(parentElm, oldCh, newCh);
  //旧前指针
  let oldStartIdx = 0
  //新前指针
  let newStartIdx = 0
  //旧后指针
  let oldEndIdx = oldCh.length - 1
  //新后指针
  let newEndIdx = newCh.length - 1

  //旧前节点
  let oldStartVnode = oldCh[oldStartIdx]
  //新前节点
  let newStartVnode = newCh[newStartIdx]
  //旧后节点
  let oldEndVnode = oldCh[oldEndIdx]
  //新后节点
  let newEndVnode = newCh[newEndIdx]

  while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    //新前和旧前相同，命中1号查找方式
    if(checkSameVnode(oldStartVnode, newStartVnode)) {
      // 进一步比较新前和旧前的内容
      console.log('1');
      patchVnode(oldStartVnode, newStartVnode)
      //新前旧前指针后移，同时改变新前节点旧前节点
      oldStartVnode = oldCh[++oldStartIdx]
      newStartVnode = newCh[++newStartIdx]

    } else if(checkSameVnode(oldEndVnode, newEndVnode)) { //新后与旧后相同，命中2号查找方式
      // 进一步比较新后和旧后的内容
      console.log('2');
      patchVnode(oldEndVnode, newEndVnode)
      //新后旧后指针前移，同时改变新后节点旧后节点
      oldEndVnode = oldCh[--oldEndIdx]
      newEndVnode = newCh[--newEndIdx]
    }
  }
}