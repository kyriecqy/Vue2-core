import parseTemplateToTokens from './parseTemplateToTokens'
window.TemplateEngine = {
  render(templateStr,data) {
    var tokens = parseTemplateToTokens(templateStr)
    console.log(tokens);
  }
}