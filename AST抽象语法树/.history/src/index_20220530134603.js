import parse from "./parse"

let templateStr = `<div>
  <p id="p">Hello</p>
  <ul>
    <li>A</li>
    <li>B</li>
  </ul>
</div>`

const ast = parse(templateStr)

console.log(ast);