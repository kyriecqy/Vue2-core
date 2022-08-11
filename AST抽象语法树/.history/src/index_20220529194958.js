import parse from "./parse"

let templateStr = `<div>
  <p>Hello</p>
  <h3>World</h3>
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
</div>`

const ast = parse(templateStr)