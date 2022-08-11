import Compile from "./Compile"
import { observe } from "./数据响应式/observe"

export default class Vue {
  constructor(options) {
    this.$options = options || {}
    this._data = options.data || undefined

    //将数据变成响应式
    observe(this._data)
    this._initData()
    //模板编译
    new Compile(options.el, this)
  }

  _initData() {
    var self = this
    Object.keys(this._data).forEach(key => {
      Object.defineProperty(this._data, key, {
        get() {
          return self._data[key]
        },

        set(newVal) {
          self._data[key] = newVal
        }
      })
    })
  }
}