import parseTemplateToTokens from './parseTemplateToTokens'
import renderTemplate from './renderTemplate';


window.TemplateEngine = {
  render(templateStr,data) {
    //调用parseTemplateToTokens函数，让模板字符串变成tokens数组
    var tokens = parseTemplateToTokens(templateStr)
    //调用renderTemplate函数，让tokens变成dom字符串
    var domStr = renderTemplate(tokens, data)
    //console.log(tokens);

    
  }
}