export default class Dep {
  constructor() {
    console.log("我是dep");
    //创建数组来存储自己的订阅者
    //这个数组中放的是Watcher的实例
    this.subs = []
  }
  //添加订阅
  addSubs(sub) {
    this.subs.push(sub)
  }
  //通知更新
  notify() {
    //浅克隆一份subs
    const subs = this.subs.slice()

    for(let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}