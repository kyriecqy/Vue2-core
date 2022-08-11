export default class Compile {
  constructor(el, vue) {
    this.$vue = vue
    this.$el = document.querySelector(el)
    //如果用户传入了挂载点
    if(this.$el) { 
      this.node2Fragment(this.$el)
    }
  }

  node2Fragment(el) {
    console.log(el);
  }
}