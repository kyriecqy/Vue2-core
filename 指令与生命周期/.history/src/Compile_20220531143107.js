import Watcher from "./数据响应式/Watcher"

export default class Compile {
  constructor(el, vue) {
    this.$vue = vue
    this.$el = document.querySelector(el)
    //如果用户传入了挂载点
    if(this.$el) { 

      //实际上用的是AST，但我们现在主要是学习指令和生命周期，所以用一个简单的函数代替
      //相当于一个轻量级的AST
      this.$fragment = this.node2Fragment(this.$el)
      //编译得到的fragment
      this.compile(this.$fragment)
      //将解析好的虚拟节点上树
      this.$el.appendChild(this.$fragment)
    }
  }

  node2Fragment(el) {
    var child
    var fragment = document.createDocumentFragment()

    while(child = el.firstChild) {
      fragment.appendChild(child)
    }

    return fragment
  }

  compile(fragment) {
    console.log(fragment);
    //获取挂载容器的所有子节点
    const childNodes = fragment.childNodes
    //保存一份this，因为在下面用到的箭头函数中this不一定指向这个函数的上下文
    var self = this

    var reg = /\{\{(.+)\}\}/
    childNodes.forEach(node => {
      console.log('node:',node)

      if(node.nodeType == 1) {
        self.compileElement(node)
      } else if(node.nodeType == 3){
        let text = node.textContent
        if(reg.test(text)) {
          console.log('匹配成功');
          //双括号中的内容，即双括号语法中的数据
          let name = text.match(reg)[1]
          self.compileText(node, name)

        }
      }
    })
  }

  compileElement(node) {
    //console.log(node);
    //使用attributes可以得到dom节点上的属性，
    //它的方便之处在于得到的不是字符串类型的属性，而是属性列表
    let nodeAttrs = node.attributes
    //console.log(nodeAttrs);
    var self = this

    //类数组对象转化成数组
    Array.prototype.slice.call(nodeAttrs).forEach(attr => {
      //在这里对v-if等指令进行分析
      console.log('attr:',attr);
      //得到属性名和属性值
      let attrName = attr.name
      let attrValue = attr.value
      
      if(attrName.indexOf('v-') == 0) {
        //如果是v-if等指令，那么我们需要得到'v-'之后的东西，来确定具体的指令操作
        let dir = attrName.substring(2)
        console.log('dir:',dir);
        if(dir == 'model') {
          let v = self.getVueVal(self.$vue, attrValue)
          node.value = v

          //new Watcher(self.$vue, attrValue, val => {
          //  node.value = val
          //})
          node.addEventListener('input', e => {
            var newVal = e.target.value
            self.setVueVal(self.$vue, attrValue, newVal)

            //v = self.getVueVal(self.$vue, attrValue)
            //node.value = v
          })
          
        }
      }
    })
  }

  compileText(node, name) {
    console.log('name:',name);
    //在Vue类的实例中寻找双大括号中的元素，并将他解析好
    node.textContent = this.getVueVal(this.$vue, name)
    console.log('node.textContent:',node.textContent);
    new Watcher(this.$vue, name, val => {
      node.textContent = val
    })
  }

  getVueVal(vue, exp) {
    var val = vue
    //这个属性可能需要连续点语法处理，例如a.m.n
    //我们就需要将他拆分开再使用中括号语法组合起来，因为js无法识别obj[a.m.n]的形式
    exp = exp.split('.')
    exp.forEach(k => {
      val = val[k]
    })

    return val
  }

  setVueVal(vue, exp, value) {
    var val = vue
    exp = exp.split('.')

    exp.forEach((k, i) => {
      //在一层层找属性时，如果到了最后一层，就将它设置为新的值
      //例如：b.m.n 我们要改变的是b.m.n中最后一层n的值，前面几层只需要迭代下来就可以了
      if(i != exp.length - 1) {
        val = val[k]
      } else {
        val[k] = value
      }
    })
  }

}