let obj = {}

Object.defineProperty(obj, 'a', {
  value: 123,
  enumerable: false
})

Object.defineProperty(obj, 'b', {
  value: 456,
  writable: true
})

Object.defineProperty(obj, 'c', {
  value: 789,
})

console.log(obj);

for(let k in obj) {
  console.log(k);
}