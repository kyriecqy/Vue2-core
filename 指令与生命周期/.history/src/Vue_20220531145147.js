import Compile from "./Compile"
import { observe } from "./数据响应式/observe"
import Watcher from "./数据响应式/Watcher"

export default class Vue {
  constructor(options) {
    this.$options = options || {}
    this._data = options.data || undefined

    //将数据变成响应式
    observe(this._data)
    //将传入的options挂载到实例身上
    this._initData()
    //this._initWatch()
    //模板编译
    //new Compile(options.el, this)
  }

  _initData() {
    var self = this
    Object.keys(this._data).forEach(key => {
      Object.defineProperty(self, key, {
        get() {
          return self._data[key]
        },

        set(newVal) {
          self._data[key] = newVal
        }
      })
    })
  }

  _initWatch() {
    var self = this
    var watch = this.$options.watch
    Object.keys(watch).forEach(key => {
      new Watcher(self, key, watch[key])
    })
  }
}