export default class Compile {
  constructor(el, vue) {
    this.$vue = vue
    this.$el = document.querySelector(el)
    //如果用户传入了挂载点
    if(this.$el) { 

      //实际上用的是AST，但我们现在主要是学习指令和生命周期，所以用一个简单的函数代替
      //相当于一个轻量级的AST
      this.node2Fragment(this.$el)
    }
  }

  node2Fragment(el) {
    var child
    var fragment = document.createDocumentFragment()

    while(el.firstChild) {
      fragment.appendChild(el.firstChild)
    }

    console.log(fragment);
  }
}