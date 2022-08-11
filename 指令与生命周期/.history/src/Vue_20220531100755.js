import Compile from "./Compile"
import { observe } from "./数据响应式/observe"

export default class Vue {
  constructor(options) {
    this.$options = options || {}
    this._data = options.data || undefined

    //将数据变成响应式
    observe(this._data)
    //模板编译
    new Compile(options.el, this)
  }
}