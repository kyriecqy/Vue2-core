import Compile from "./Compile"

export default class Vue {
  constructor(options) {
    this.$options = options || {}
    this._data = options.data || undefined

    //将数据变成响应式

    //模板编译
    new Compile(options.el, this)
  }
}