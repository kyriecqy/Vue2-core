import Scanner from './Scanner'
window.TemplateEngine = {
  render(templateStr,data) {
    //实例化一个扫描器，构造时候提供一个参数，这个参数就是模板字符串
    //也就是说这个扫描器就是针对这个模板字符串工作的
    var scanner = new Scanner(templateStr)
  }
}