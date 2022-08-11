import parse from "./parse"

let templateStr = `<div>
  <p>Hello</p>
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
</div>`

const ast = parse(templateStr)

console.log(ast);