export default class Compile {
  constructor(el, vue) {
    this.$vue = vue
    this.$el = document.querySelector(el)
    //如果用户传入了挂载点
    if(this.$el) { 

      //实际上用的是AST，但我们现在主要是学习指令和生命周期，所以用一个简单的函数代替
      //相当于一个轻量级的AST
      this.$fragment = this.node2Fragment(this.$el)
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
      console.log('node:',node);
      //将每个节点的文本保存
      var text = node.textContent
      console.log(text);


    })
  }
}