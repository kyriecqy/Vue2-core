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
  compile(el) {
    console.log(el);
    //获取挂载容器的所有子节点
    const childNodes = el.childNodes
    //保存一份this，因为在下面用到的箭头函数中this不一定指向这个函数的上下文
    var self = this

    childNodes.forEach(node => {
      console.log('node:',node)

      if(node.nodeType == 1) {
        self.compileElement(node)
      } else if(node.nodeT == 3){
        let text = node.textContent
        self.compileText(text)
      }
    })
  }

  compileElement(node) {
    console.log(node);
    //使用attributes可以得到dom节点上的属性，
    //它的方便之处在于得到的不是字符串类型的属性，而是属性列表
    let nodeAttrs = node.attributes
    console.log(nodeAttrs);

    //类数组对象转化成数组
    Array.prototype.slice.call(nodeAttrs).forEach(attr => {
      console.log('attr:',attr);
      let attrName = attr.name
      let attrValue = attr.value

      let dir = attrName.substring(2)
      if(attrName.indexOf('v-') == 0) {

      }
    })
  }

  compileText(text) {

  }
}