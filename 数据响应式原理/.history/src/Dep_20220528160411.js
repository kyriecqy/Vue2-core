export default class Dep {
  constructor() {
    console.log("我是dep");
  }

  notify() {
    console.log("notify");
  }
}