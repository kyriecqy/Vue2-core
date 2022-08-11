import Dep from "./Dep";
export default class Watcher {
  //构造函数传入三个参数：要监听的对象，这个对象的属性， 回调函数
  constructor(target, expression, callback) {
    this.obj = target
    this.getter = parsePath(expression)
    this.callback = callback
    this.value = this.get()
  }
  //数据发生更新时调用
  update() {
    this.getAndInvoke(this.callback)
  }
  //进入依赖收集阶段
  get() {
    //将Dep.target设置为Watcher本身，那么就进入依赖收集模式
    Dep.target = this
    console.log("全局位置",Dep.target);

    var value

    try {
      value = this.getter(this.obj)
    } catch (error) {
      console.log(err);
    } finally {
      //退出依赖收集阶段
      Dep.target = null
    }

    return value
  }

  getAndInvoke(cb) {
    const value = this.get()

    if(value !== this.value || typeof value == 'object') {
      const oldValue = this.value
      this.value = value
      cb.call(this.obj, value, oldValue)
    }
  }
}

function parsePath(str) {
  let segments = str.split('.')

  return (obj) => {
    for(let i=0; i<segments.length; i++) {
      obj = obj[segments[i]]
    }

    return obj
  }
}