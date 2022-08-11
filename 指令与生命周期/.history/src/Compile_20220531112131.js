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
      }
    })
  }

  compileText(node, name) {

  }
}