import patchVnode from "./patchVnode";
import CreateElement from "./createElement"

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

  let keyMap = null

  while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    console.log('死循环了');
    if(oldStartVnode == undefined) {
      oldStartVnode = oldCh[++oldStartIdx]
    } else if(oldEndVnode == undefined) {
      oldEndVnode = oldCh[--oldEndIdx]
    }
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
    } else if(checkSameVnode(oldStartVnode, newEndVnode)) { //新后与旧前相同，命中3号查找方式
        console.log('3');
        patchVnode(oldStartVnode, newEndVnode)
        //当3号(新后和旧前)命中时，此时要移动节点，移动新后指向的节点到旧后指向的节点后面，已处理好的节点之前
        //在这里直接移动旧节点，因为在patchNode中已经更加新旧节点的异同，将新节点中的内容插入到旧节点中了
        parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling)
        //旧前指针后移，新后指针前移
        oldStartVnode = oldCh[++oldStartIdx]
        newEndVnode = newCh[--newEndIdx]
    } else if(checkSameVnode(oldEndVnode, newStartVnode)) { //新前与旧后相同，命中4号查找方式
        console.log('4');
        patchVnode(oldEndVnode, newStartVnode)
        //当4号(新前和旧后)命中时，此时要移动节点，移动新前指向的节点到旧前指向的节点前面，已处理的节点后面
        //在这里直接移动旧节点，因为在patchNode中已经更加新旧节点的异同，将新节点中的内容插入到旧节点中了
        parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm)
        oldEndVnode = oldCh[--oldEndIdx]
        newStartVnode = newCh[++newStartIdx]
    } else {
      //keyMap用于存储对应key在旧节点中的位置
      if(!keyMap) {
        keyMap = {}
        for(let i = oldStartIdx; i <= oldEndIdx; i++) { 
          const key = oldCh[i].key
          if(key != undefined) {
            keyMap[key] = i
          }
        }
      }
      console.log(keyMap);
      //寻找当前项(newStartIdx)在keyMap中的位置
      const idxInOld = keyMap[newStartVnode.key]
      console.log(idxInOld);
      //判断，如果idxInOld是undefined，那么它就是全新的项，要插入节点
      if(idxInOld == undefined) {
        
      } else { // 不是undefined，那么它不是全新的项，要移动
        //取出要移动的项
        const elmToMove = oldCh[idxInOld]
        patchVnode(elmToMove, newStartVnode)

        parentElm.insertBefore(CreateElement(elmToMove), oldStartVnode.elm)

        oldCh[idxInOld] = undefined
      }
      newStartIdx++
    }
  }

  if(newStartIdx <= newEndIdx) {
    console.log('new中还有剩余');
    let before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm

    for(let i = newStartIdx; i <= newEndIdx; i++) {
      parentElm.insertBefore(CreateElement(newCh[i]), before)
    }
  } else if(oldStartIdx <= oldEndIdx) {
    console.log('old中还有剩余');
    for(let i = oldStartIdx; i <= oldEndIdx; i++) {
      parentElm.removeChild(oldCh[i].elm)
    }
  }
}